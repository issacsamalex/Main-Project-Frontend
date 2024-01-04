import { Box, Container } from '@mui/material'
import React from 'react'
import NavBarStudentView from '../navBar/NavBarStudentView'

const StudentDash = () => {
  return (
    <>
    <Box>
        <Container>
            <NavBarStudentView/>
            <h1>Welcome</h1>
        </Container>
    </Box>
    </>
  )
}

export default StudentDash