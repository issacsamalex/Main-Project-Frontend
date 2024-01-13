import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ProjectOverview from '../../pages/projectOverview/ProjectOverview';
import { LuFiles } from "react-icons/lu";
import { BsCalendar2Week } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { CgDetailsMore } from "react-icons/cg";
import { MdFormatListBulleted } from "react-icons/md";
import logoImg from "../../media/main-logo.png";
import Week1Page from '../../pages/referanceMaterial/Week1Page';
import CustomButton from '../customComponents/CustomButton';
import {
    styled,
  } from "@mui/material";
import CustomButtonOutline from '../customComponents/CustomButtonOutline';
import Week2Page from '../../pages/referanceMaterial/Week2Page';
import Week3Page from '../../pages/referanceMaterial/Week3Page';
import Week4Page from '../../pages/referanceMaterial/Week4Page';
import WeeklySubmissionIndex from '../../pages/weeklySubmission/WeeklySubmissionIndex';
import Week1pageSub from '../../pages/weeklySubmission/Week1pageSub';
import Week2pageSub from '../../pages/weeklySubmission/Week2pageSub';
import Week3pageSub from '../../pages/weeklySubmission/Week3pageSub';
import Week4pageSub from '../../pages/weeklySubmission/Week4pageSub';
import FinalReportSubmission from '../../pages/finalReport/FinalReportSubmission';
import axios from 'axios';

const drawerWidth = 240;

const Sidenav = () => {

    const [projectId, setProjectId] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const userID = localStorage.getItem('userID');
            const response = await axios.get(`http://localhost:3001/api/v1/dash/student/user/${userID}`)
            setProjectId(response.data.project_id)
            const project = await axios.get(`http://localhost:3001/api/v1/dash/project/selected/${projectId}`)
        } 
    })

    const NavbarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }));

    const [menuData, setMenuData] = useState("ProjectOverview");

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar className='sidebar' sx={{ justifyContent: 'space-between'}}>
          <Typography variant="h6" noWrap component="div">
            Project Name
          </Typography>
          <Box sx={{display: 'flex', gap: "40px"}}>
          <Box sx={{display: 'flex', gap: "10px"}}>
          <CustomButtonOutline
            backgroundColor="none"
            borderColor= "#137d87"
            color="#137d87"
            buttonText="Discussion Forum"
            />
            <CustomButtonOutline
            backgroundColor="none"
            borderColor= "#137d87"
            color="#137d87"
            buttonText="View Grades"
            />
          </Box>
          <CustomButton
          backgroundColor="#134987"
          color="#fff"
          buttonText="Log out"
          />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <NavbarLogo sx={{width: "150px", marginInline: '44px'}} src={logoImg} alt="logo" />

        <Divider />
        <List>
        <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("ProjectOverview")}>
                <ListItemIcon>
                <CgDetailsMore />
                </ListItemIcon>
                <ListItemText primary={'Project Overview'} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <LuFiles />
                </ListItemIcon>
                <ListItemText primary={'Reference Material'} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("referenceWeek1")}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText secondary={'Week 1'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("referenceWeek2")}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText secondary={'Week 2'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("referenceWeek3")}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText secondary={'Week 3'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("referenceWeek4")}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText secondary={'Week 4'} />
              </ListItemButton>
            </ListItem>

        </List>
        <Divider />
        <List>
        <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("weeklysubmissionindex")}>
                <ListItemIcon>
                <BsCalendar2Week />
                </ListItemIcon>
                <ListItemText primary={'Weekly Submission'} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("submissionweek1")}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText secondary={'Week 1'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("submissionweek2")}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText secondary={'Week 2'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("submissionweek3")}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText secondary={'Week 3'} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("submissionweek4")}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText secondary={'Week 4'} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem disablePadding>
              <ListItemButton onClick={()=> setMenuData("finalreportsubmission")}>
                <ListItemIcon>
                <GoProject />
                </ListItemIcon>
                <ListItemText primary={'Final Project Report Submission'} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <MdFormatListBulleted />
                </ListItemIcon>
                <ListItemText primary={'Viva Voce Format'} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
        {menuData === "ProjectOverview" && <ProjectOverview/>}
        {menuData === "referenceWeek1" && <Week1Page/>}
        {menuData === "referenceWeek2" && <Week2Page/>}
        {menuData === "referenceWeek3" && <Week3Page/>}
        {menuData === "referenceWeek4" && <Week4Page/>}
        {menuData === "weeklysubmissionindex" && <WeeklySubmissionIndex/>}
        {menuData === "submissionweek1" && <Week1pageSub/>}
        {menuData === "submissionweek2" && <Week2pageSub/>}
        {menuData === "submissionweek3" && <Week3pageSub/>}
        {menuData === "submissionweek4" && <Week4pageSub/>}
        {menuData === "finalreportsubmission" && <FinalReportSubmission/>}
      </Box>
    </Box>
  )
}

export default Sidenav