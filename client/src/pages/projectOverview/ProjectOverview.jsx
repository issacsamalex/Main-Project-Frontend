import { Container } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ProjectOverview = () => {
  return (
    <>
    <Container>
    <Card sx={{ }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="340"
        image="
        https://images.prismic.io/edapp-website/MWU3NzMwNGItZDhiNi00ZGVmLWFiODgtOWIzZjY4MTJmMGQ1_10_online_quiz_platforms-png_iaa?auto=compress,format&rect=10,0,1340,700&w=1200&h=627
        "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardContent>
        <a href='https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA' target='blank'><Typography variant="body1" color="ButtonText">Detailed documentation of the project:</Typography></a>
      </CardContent>
      <CardContent>
        <Typography>Date of enrollment: 01/03/2023</Typography>
        <Typography>Date of submission: 28/03/2023</Typography>
      </CardContent>
    </Card>
    </Container>
    </>
  )
}

export default ProjectOverview