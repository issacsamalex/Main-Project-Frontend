import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import NavBarStudentView from "../navBar/NavBarStudentView";
import '../../styles/dashBoard.css'
import ProjectOverview from "../../pages/projectOverview/ProjectOverview";
import Sidenav from "../common/Sidenav";

const ProjectDash = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    gap: theme.spacing(10),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  return (
    <>
      <Sidenav/>
    </>
  );
};

export default ProjectDash;
