import styles from './form.module.css';
import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';

export default function GetinTouch({ open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;

    if (open) {
      if (!node.open) node.showModal();
    } else {
      if (node.open) node.close();
    }

    const handleNativeClose = () => {
      onClose?.();
    };

    node.addEventListener('close', handleNativeClose);
    return () => node.removeEventListener('close', handleNativeClose);
  }, [open, onClose]);

  return createPortal(
    <>
      {open && (
        <div className={styles.backdrop}>
          <dialog ref={dialog} className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose}>Cancel</button>
            <button className={styles.closeButton} onClick={onClose}>Submit</button>
          </dialog>
        </div>
      )}
    </>,
    document.getElementById('modal')
  );
}
