import React from "react";
import useRandomFoodTruckAddress from "../hooks/useRandomFoodTruckAddress";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Loader from '@mui/material/CircularProgress'
function Copyright() {
  return (
    <Typography variant="body2" color="whitesmoke">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const RandomFoodTruckAddress: React.FC = () => {
  const [address, loading] = useRandomFoodTruckAddress();

  if (loading) {
    return <Loader/>
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h3" component="h3" gutterBottom sx={{ color: 'whitesmoke', fontWeight: 600 }}>
          Random Food Truck Address:
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{
          color: 'rgb(102, 178, 255)'
        }}>
          {address && address}
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          color: 'whitesmoke',
          backgroundColor: 'rgb(45, 56, 67)'}}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default RandomFoodTruckAddress;
