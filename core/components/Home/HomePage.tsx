import useSWR from 'swr';
import { useRouter } from 'next/router';

// import local service
import USER_SERV from '../../services/userServ';

// imoprt local context
import { useRepoContext } from '../../context/repoContext';

// import local components
import InnerSpinner from '../Spinner/InnerSpinner';
import FilterBar from './FilterBar';

// import MUI Components
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';

// imoprt local interface
import { InterfaceRepo, InterfaceRepoContext } from '../../interfaces/git';

const HomePage = () => {
  const router = useRouter();

  const {
    data: repoList,
    error,
    isLoading,
  } = useSWR('repo-list', USER_SERV.getAuthUserRepo, {
    refreshInterval: 1000 * 60 * 60,
  });
  if (error) {
    return (
      <div>
        <p>There is an Error</p>
      </div>
    );
  }

  const { setRepo } = useRepoContext() as InterfaceRepoContext;

  const handleCardClick = (repo: InterfaceRepo) => {
    setRepo(repo);
    router.push('/repo-detail');
  };

  return (
    <>
      <h2 className="mb-5 text-center text-3xl font-bold">
        LIST OF REPOSITORIES
      </h2>
      <FilterBar />
      <Box
        component="div"
        sx={{
          height: '100%',
        }}
      >
        {isLoading ? (
          <InnerSpinner />
        ) : (
          repoList?.map((repo, index) => (
            <div key={index.toString() + 'abxc'}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  onClick={() => {
                    handleCardClick(repo);
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
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
