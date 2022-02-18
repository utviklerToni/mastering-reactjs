import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className='App'>
      <Header />
      <Form />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default App;
