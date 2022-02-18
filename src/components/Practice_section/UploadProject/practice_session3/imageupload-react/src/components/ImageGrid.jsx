import React, { Fragment } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore('images');
  // console.log(docs);
  return (
    <Fragment>
      <div className='img-grid'>
        {docs &&
          docs.map((doc) => (
            <motion.div
              className='img-wrap'
              layout
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
              whileHover={{ opacity: 1 }}
            >
              <motion.img
                src={doc.url}
                alt='someone ate this :('
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </Fragment>
  );
};

export default ImageGrid;
