import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function Alerts({error, errorDescription}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>{error}</AlertTitle>
        <strong>{errorDescription}</strong>
      </Alert>
    </Stack>
  );
}