import { Button, Card, CardActions, CardContent } from "@mui/material";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { LoginRegister } from "./LoginRegister";
import { LoginAvatar } from "./LoginAvatar";

const LoginCard = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card variant="elevation" elevation={6}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <LoginAvatar />
          <LoginForm />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button onClick={() => setOpen(true)} variant="text" color="primary">
            Register
          </Button>
        </CardActions>
      </Card>

      <LoginRegister open={open} onClose={handleClose} />
    </>
  );
};
export default LoginCard;
