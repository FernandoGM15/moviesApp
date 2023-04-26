import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

export interface DialogPropsI {
  open: boolean;
  onClose: () => void;
}

export const LoginRegister = (props: DialogPropsI) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogTitle>
        <Typography variant="h5" textAlign="center">
          New user
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            variant="outlined"
            label="Name"
            size="small"
            fullWidth
            margin="normal"
            required={true}
          />
          <TextField
            variant="outlined"
            label="Email"
            size="small"
            fullWidth
            margin="normal"
            required={true}
          />
          <TextField
            variant="outlined"
            label="Password"
            size="small"
            fullWidth
            margin="normal"
            required={true}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained">Register</Button>
      </DialogActions>
    </Dialog>
  );
};
