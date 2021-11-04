import { useEffect, useState } from 'react';
import Modal from './components/modal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalClosed, setModalClosed] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log('app');
      setModalOpen(true);
    }, Math.floor(Math.random() * 5000) + 1000);
  }, [isModalClosed]);

  return (
    <div className='App'>
      <h1>Click to Open the Annoying Modal</h1>
      <button className='openModalBtn' onClick={() => setModalOpen(true)}>
        Open
      </button>
      {isModalOpen && (
        <Modal setModalOpen={setModalOpen} setModalClosed={setModalClosed} />
      )}
    </div>
  );
}

export default App;
