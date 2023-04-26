import { Button, Grid, TextField } from "@mui/material";
const LoginForm = () => {
  return (
    <form>
      <Grid container gap={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="Email"
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="Password"
            type="password"
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained"type="submit">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default LoginForm;
