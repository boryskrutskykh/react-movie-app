import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Dialog.module.scss';

interface DialogProps {
  title: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  dialogType?: 'edit' | 'delete';
}

const Dialog: React.FC<DialogProps> = ({ title, children, onClose, dialogType = 'edit' }) => {

  const dialogContentClass = dialogType === 'delete' ? styles.deleteDialogContent : styles.dialogContent;
  const dialogHeaderClass = dialogType === 'delete' ? styles.deleteDialogHeader : styles.dialogHeader;

  return createPortal(
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div className={dialogContentClass} role="dialog" onClick={(e) => e.stopPropagation()}>
        <div className={dialogHeaderClass}>
          <h2 className={styles.dialogTitle}>{title}</h2>
          <button className={styles.dialogCloseButton} onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className={styles.dialogBody}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Dialog;
