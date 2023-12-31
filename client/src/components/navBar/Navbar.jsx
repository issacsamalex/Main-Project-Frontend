import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logoImg from "../../media/main-logo.png";
import { Container } from "@mui/system";
import CustomButton from "../customComponents/CustomButton";
import {
  styled,
} from "@mui/material";



const Navbar = () => {

    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "#4F5361",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
          color: "#70a2da",
        },
      }));
    
      const NavbarLinksBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }));
    
    
      const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(2),
        },
      }));

      const NavbarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }));

  return (
    <NavbarContainer>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NavbarLogo sx={{width: "150px"}} src={logoImg} alt="logo" />
      </Box>

      <NavbarLinksBox>
        <NavLink variant="body2">Home</NavLink>
        <NavLink variant="body2">Features</NavLink>
        <NavLink variant="body2">Contact</NavLink>
      </NavbarLinksBox>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <NavLink variant="body2">Log In</NavLink>
      <CustomButton
        backgroundColor="#134987"
        color="#fff"
        buttonText="Sign up"
      />
    </Box>
  </NavbarContainer>
  )
}

export default Navbar