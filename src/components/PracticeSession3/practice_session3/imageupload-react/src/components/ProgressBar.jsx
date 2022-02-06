import React, { useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import useStorage from '../hooks/useStorage';

import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  // console.log(progress, url);
  return (
    <Fragment>
      <br />
      <span className=''>{`${Math.floor(progress)}%`}</span>
      <motion.div
        className='progress-bar'
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
      ></motion.div>
    </Fragment>
  );
};

export default ProgressBar;
