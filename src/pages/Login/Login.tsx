import { Grid } from "@mui/material";
import LoginCard from "./components/LoginCard/LoginCard";

const Login = () => {
  return (
    <Grid
      container
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={8} md={6} lg={3}>
        <LoginCard />
      </Grid>
    </Grid>
  );
};

export default Login;
