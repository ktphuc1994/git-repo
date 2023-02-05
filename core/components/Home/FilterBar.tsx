// import local interface
import { InterfaceFilterBarComponents } from '../../interfaces/Pages/Repo.interface';

// import MUI components
import { Button, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';

const FilterBar = ({
  projectNameRef,
  handleSearchProject,
}: InterfaceFilterBarComponents) => {
  return (
    <Box
      component="div"
      sx={{
        mb: '2rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <TextField
        sx={{
          width: { xs: '100%', md: 'initial' },
          mb: { xs: '0.5rem', md: 0 },
          flexGrow: 1,
        }}
        label="Project Name"
        variant="standard"
        inputRef={projectNameRef}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            document.getElementById('project-name-search')?.click();
          }
        }}
      />
      <Button
        sx={{
          width: { xs: '100%', md: 'initial' },
          ml: { xs: 0, md: '0.5rem' },
          flexShrink: 0,
        }}
        variant="outlined"
        id="project-name-search"
        onClick={handleSearchProject}
      >
        Search
      </Button>
    </Box>
  );
};

export default FilterBar;
