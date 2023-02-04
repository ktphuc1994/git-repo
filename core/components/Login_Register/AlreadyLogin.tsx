import { Button } from '@mui/material';
import Link from 'next/link';

const AlreadyLogin = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="mb-3 text-xl text-center font-semibold">
        <p>Logged in.</p>
        <p>It's lonely here.</p>
      </div>
      <Button variant="contained" color="error" LinkComponent={Link} href="/">
        Let's head back to Homepage
      </Button>
    </div>
  );
};

export default AlreadyLogin;
