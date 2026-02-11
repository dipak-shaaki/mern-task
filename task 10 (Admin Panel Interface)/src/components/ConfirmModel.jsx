import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

function ConfirmModal({ open, onClose, onConfirm }) {
  console.log("ConfirmModal rendered with open:", open);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 9999,
        "& .MuiDialog-container": {
          zIndex: 9999
        }
      }}
    >
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this user? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} color="error" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmModal;