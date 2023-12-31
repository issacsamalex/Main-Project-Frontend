import { Box, Container } from '@mui/material'
import React from 'react'
import NavBarStudentView from '../navBar/NavBarStudentView'

const ProjectDash = () => {
  return (
    <>
    <Box>
        <Container>
            <NavBarStudentView/>
            <h1>Headline</h1>
        </Container>
    </Box>
    </>
  )
}

export default ProjectDash