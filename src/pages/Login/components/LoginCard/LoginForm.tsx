import { Button, Grid, TextField } from "@mui/material";
import { FormEvent, useContext } from "react";
import { login } from "../../../../services/auth.service";
import AppContext from "../../../../context/AppContext/AppContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = new FormData(e.currentTarget);
      const email = form.get("email") as string;
      const password = form.get("password") as string;
      const user = await login(email, password);
      setUser(user)
      navigate("/home", { replace: true })
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
