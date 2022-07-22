import { useState, useEffect } from 'react';
import './style.css'

const Loader = () => {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    //console.log(loader)
  }, [loader])

  if(loader){
    return <div className='loader'>
      <p className='txtLoader'>Loading</p>
    </div>
  }

  return;
};
  
export default Loader;