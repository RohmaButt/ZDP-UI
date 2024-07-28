import React, { useState } from 'react';
import { Alert, Snackbar, SnackbarContent } from '@mui/material';
import { styles } from './style';

type IProps = {
  open: boolean;
  handleClose?: () => void;
  autoHideDuration: number;
  snackBarText: string;
  children: React.ReactNode;
  vertical: 'top' | 'bottom'; // Specify the correct type
  horizontal: 'left' | 'center' | 'right'; // Specify the correct type
};

function SnackBar({
  open,
  handleClose,
  autoHideDuration,
  snackBarText,
  vertical,
  horizontal,
}: IProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
      onClose={handleClose}
    >
      <Alert severity="success" onClose={handleClose} sx={styles.alertText}>
        {snackBarText}
      </Alert>
    </Snackbar>
  );
}

export default SnackBar;

SnackBar.defaultProps = {
  vertical: 'top',
  horizontal: 'right',
};
