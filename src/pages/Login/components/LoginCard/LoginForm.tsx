import { Button, Grid, TextField } from "@mui/material";
import { FormEvent } from "react";
import { login } from "../../../../services/auth.service";

const LoginForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = new FormData(e.currentTarget);
      const email = form.get("email") as string;
      const password = form.get("password") as string;
      await login(email, password);
      alert("Login Successful");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            name="email"
            label="Email"
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            name="password"
            label="Password"
            type="password"
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" type="submit">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default LoginForm;
