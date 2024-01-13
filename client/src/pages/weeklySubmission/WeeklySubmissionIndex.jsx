import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Weekly submission report
        </Typography>
        <iframe title='docs' src="https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/preview?resourcekey=0-5DqnTtXPFvySMiWstuAYdA" width="640" height="680" allow="autoplay"></iframe>
      </CardContent>
    </React.Fragment>
  );

const WeeklySubmissionIndex = () => {
  return (
    <>
     <Container>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </Container>
    </>
  )
}

export default WeeklySubmissionIndex