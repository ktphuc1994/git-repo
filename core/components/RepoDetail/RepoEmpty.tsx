import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function RepoEmpty() {
  return (
    <div className="text-xl text-center">
      <p className="mb-3">
        There was no repository selected. Please navigate to Repository List and
        Select one.
      </p>
      <Link href="/">
        <Button color="brightRed" variant="outlined" size="large">
          Repositories
        </Button>
      </Link>
    </div>
  );
}

export default RepoEmpty;
