import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

// import local service
import USER_SERV from '../../services/userServ';

// imoprt local context
import { useRepoContext } from '../../context/repoContext';

// import local components
import InnerSpinner from '../common/Spinner/InnerSpinner';
import FilterBar from './FilterBar';

// import MUI Components
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

// imoprt local interface
import { InterfaceRepo } from '../../interfaces/git';
import { InterfaceRepoContext } from '../../interfaces/context';
import { AxiosError } from 'axios';

const HomePage = () => {
  const router = useRouter();
  const { setRepo, gitEtag, setGitEtag } =
    useRepoContext() as InterfaceRepoContext;
  const [searchName, setSearchName] = useState<string>('');
  const projectNameRef = useRef<HTMLInputElement>(null);

  const { data, error, isLoading } = useSWR(
    'repo-list',
    () => USER_SERV.getAuthUserRepo(gitEtag, setGitEtag),
    {
      onErrorRetry: (err: AxiosError) => {
        const errStatus = err.response?.status;
        if (errStatus === 304) return;
      },
      refreshInterval: 1000 * 60 * 60,
      revalidateOnFocus: false,
    }
  );
  if (error && error instanceof AxiosError && error.response?.status !== 304) {
    // console.log(error);
    return (
      <div className="text-2xl text-center">
        <p>There is an Error while loading page. Please try again later.</p>
      </div>
    );
  }

  const repoList = data?.filter((repo) => repo.name.includes(searchName));

  const handleCardClick = (repo: InterfaceRepo) => {
    setRepo(repo);
    router.push('/repo-detail');
  };

  const handleSearchProject = () => {
    setSearchName(projectNameRef.current?.value || '');
  };

  return (
    <>
      <h2 className="mb-5 text-center text-3xl font-bold">
        LIST OF REPOSITORIES
      </h2>
      <FilterBar
        projectNameRef={projectNameRef}
        handleSearchProject={handleSearchProject}
      />
      <Box component="div">
        {isLoading ? (
          <InnerSpinner />
        ) : (
          repoList?.map((repo, index) => (
            <div key={repo.name + index}>
              <Card sx={{ width: '100%', mb: '1rem' }}>
                <CardActionArea
                  onClick={() => {
                    handleCardClick(repo);
                  }}
                >
                  <CardContent>
                    <Typography
                      color="primary"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {repo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {repo.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))
        )}
      </Box>
    </>
  );
};

export default HomePage;
