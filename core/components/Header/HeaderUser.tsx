import { useState } from 'react';

// import local hooks
import useUser from '../../hooks/useUser';

// import MUI components
import { Button, Menu, MenuItem } from '@mui/material';
import { localServ } from '../../services/localServ';

const HeaderUser = () => {
  // Fetch the user client-side
  const { user, mutateUser } = useUser({ redirectTo: '/login' });
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  // Server-render loading state
  // if (!user) {
  //   return <div>...Loading</div>;
  // }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localServ.removeToken();
    mutateUser(undefined);
  };

  return (
    <div>
      <Button
        id="user-nav-button"
        size="large"
        color="darkOrange"
        aria-controls={open ? 'user-nav-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {!user ? '...Loading' : user.username}
      </Button>
      <Menu
        id="user-nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'user-nav-button',
        }}
      >
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderUser;
