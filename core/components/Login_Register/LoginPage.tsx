import { FormEvent } from 'react';
import { useRouter } from 'next/router';

// import local hooks
import useUser from '../../hooks/useUser';

// import local services
import USER_SERV from '../../services/userServ';
import { localServ } from '../../services/localServ';

// import local components
import AlreadyLogin from './AlreadyLogin';

// import local interface
import { InterfaceLoginPageComponent } from '../../interfaces/Pages/Login.interface';

// import MUI component
import {
  Box,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = ({ setSnackBarState }: InterfaceLoginPageComponent) => {
  const router = useRouter();
  const { user, mutateUser } = useUser();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    USER_SERV.login({ email, password })
      .then((res) => {
        localServ.setToken(res.token);
        mutateUser();
        setSnackBarState({
          open: true,
          severity: 'success',
          message: 'Login successfully. Redirecting to Homepage',
        });
        setTimeout(() => {
          router.push('/');
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        const errMess = err.response.data
          ? err.response.data
          : 'Unexpected Error. Please try again later.';
        setSnackBarState({
          open: true,
          severity: 'error',
          message: errMess,
        });
      });
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {user ? (
          <AlreadyLogin />
        ) : (
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                defaultValue=""
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                defaultValue=""
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default LoginPage;
