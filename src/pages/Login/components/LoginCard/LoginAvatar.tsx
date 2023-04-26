import { Avatar, Grid } from "@mui/material";

export const LoginAvatar = () => {
  return (
    <Grid item xs={12} display="flex" justifyContent="center">
      <Avatar
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.main",
          width: "5rem",
          height: "5rem",
        }}
      />
    </Grid>
  );
};
