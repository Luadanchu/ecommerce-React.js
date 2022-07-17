import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

const Loader = () => {
// const Loader = ({ loading }) => {

  const [loader, setLoader] = useState(false)

  // const runLoader = () => {
  //   setLoader(true)
  //   console.log(loader)
  // }

  // useEffect(() => {
  //   setTimeout(runLoader, 1500)
  // }, [])

  useEffect(() => {
    setLoader(true)
    console.log(loader)
  }, [loader])

  if(loader){
    return <CircularProgress size={100} width={100} height={100} />
  }

  return;
  // return(
  //   loader ?(<CircularProgress size={100} width={100} height={100} />) : console.log("Ya no se")
  // );
};
  
export default Loader;
 