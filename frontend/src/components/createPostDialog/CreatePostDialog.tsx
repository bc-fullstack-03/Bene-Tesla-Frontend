import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
interface Props {
  open: boolean;
  onClose: () => void;
}

const MyDialog: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <i className="fas fa-plus"></i> Create Post
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <i className="fas fa-exclamation-triangle"></i> This feature is not
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
         <i className="fas fa-times"></i> Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;