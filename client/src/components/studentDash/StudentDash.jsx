import { Box, Container } from '@mui/material'
import React from 'react'
import NavBarStudentView from '../navBar/NavBarStudentView'
import ProjectList from '../projectInfo/ProjectList'

const StudentDash = () => {
  return (
    <>
      <Box>
        <Container>
          <NavBarStudentView />
          <h1>Welcome</h1>
          <br /><br />
          <ProjectList />
        </Container>
      </Box>
    </>
  )
}

export default StudentDash