import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FormEvent } from "react";
import { storeUser } from "../../../../services/user.service";

export interface DialogPropsI {
  openDialog: boolean;
  onClose: () => void;
}

export const LoginRegister = (props: DialogPropsI) => {
  const { openDialog, onClose } = props;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formElement = e.currentTarget as HTMLFormElement;
      await storeUser(formElement);
      alert("User registered");
      onClose();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Dialog open={openDialog} onClose={() => onClose()}>
        <DialogTitle textAlign="center">
          New user
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

        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              variant="outlined"
              label="Name"
              name="name"
              size="small"
              fullWidth
              margin="normal"
              required={true}
            />
            <TextField
              variant="outlined"
              label="Email"
              size="small"
              name="email"
              fullWidth
              margin="normal"
              required={true}
            />
            <TextField
              variant="outlined"
              label="Password"
              size="small"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              required={true}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ marginTop: 1.5 }}
            >
              Register
            </Button>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
