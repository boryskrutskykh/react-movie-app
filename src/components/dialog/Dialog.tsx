import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Dialog.module.scss';

interface DialogProps {
  title: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, children, onClose }) => {
  return createPortal(
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.dialogHeader}>
          <h2 className={styles.dialogTitle}>{title}</h2>
          <button className={styles.dialogCloseButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.dialogBody}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Dialog;
