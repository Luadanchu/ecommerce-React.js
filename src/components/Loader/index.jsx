import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {

  const [loading, setLoading] = useState(true)

  const loaderRun = () => {
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(loaderRun, 1000)
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={40} loading={loading}/>
    </Box>
  );
};

export default Loader;