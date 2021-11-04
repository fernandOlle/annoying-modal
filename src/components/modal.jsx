import { useEffect } from 'react';
import './modal.css';

const Modal = (props) => {
  const { setModalOpen, setModalClosed } = props;

  useEffect(() => {
    setTimeout(() => {
      console.log('modal');
      setModalClosed((current) => current + 1);
      setModalOpen(false);
    }, Math.floor(Math.random() * 5000) + 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='modalCloseBtn'>
          <button
            onClick={() =>
              setModalOpen((current) => {
                setModalClosed((current) => current + 1);
                return false;
              })
            }
          >
            {' '}
            X{' '}
          </button>
        </div>
        <div className='modalTitle'>
          <h1>Hi, long time no see! :D</h1>
        </div>
        <div className='modalBody'>
          <p>I've been missing you :/</p>
        </div>
        <div className='modalFooter'>
          <button
            onClick={() =>
              setModalOpen((current) => {
                setModalClosed((current) => current + 1);
                return false;
              })
            }
          >
            Close Me ;-;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
