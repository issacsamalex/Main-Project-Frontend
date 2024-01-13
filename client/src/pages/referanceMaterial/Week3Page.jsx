import { Container } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player/youtube'

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Reference Video (week 3)
        </Typography>
        <ReactPlayer url={'https://youtu.be/7KDRqBpT8NA'} controls ></ReactPlayer>
      </CardContent>
      <CardContent>
        <a href='https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA' target='blank'><Typography variant="body1" color="ButtonText">Additional reference material</Typography></a>
      </CardContent>
    </React.Fragment>
  );

const Week3Page = () => {
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

export default Week3Page