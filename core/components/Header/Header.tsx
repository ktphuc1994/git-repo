import Link from 'next/link';

// import local components
import HeaderUser from './HeaderUser';

// import MUI components
import { Box, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

// import local interface
import { InterfaceHeaderComponent } from '../../interfaces/Layout/Layout.interface';

function Header({ handleSidebarToggle }: InterfaceHeaderComponent) {
  return (
    <Box
      sx={{
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: '1.5rem',
        py: '0.5rem',
      }}
    >
      <div className="flex items-center">
        <IconButton
          color="inherit"
          aria-label="open sidebar"
          edge="start"
          onClick={handleSidebarToggle}
          sx={{ mr: 1.5, display: { md: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Link href="/" className="font-bold text-3xl">
          MY
          <Typography
            component="span"
            sx={{
              fontSize: 'inherit',
              fontWeight: 'inherit',
              color: 'primary.main',
            }}
          >
            PROFILE
          </Typography>
        </Link>
      </div>
      <HeaderUser />
    </Box>
  );
}

export default Header;
