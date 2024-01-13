import { Container } from '@mui/material'
import React, { useState, useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomButton from '../../components/customComponents/CustomButton';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Final Project Report Submission
        </Typography>
      </CardContent>
      <CardContent>
        <a href='https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA' target='blank'><Typography variant="body1" color="ButtonText">Sample Project Report</Typography></a>
      </CardContent>
      <CardContent>
        <Typography>What all to submit?</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {bull} Google Docs link
      </Typography>
      </CardContent>
        
    </React.Fragment>
  );

const FinalReportSubmission = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');

  return (
    <>
    <Container>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}
      <JoditEditor
      ref={editor}
      value={content}
      onChange={newContent => setContent(newContent)}
      />
      {content}
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '30px'}}>
      <CustomButton
      backgroundColor="#134987"
      color="#fff"
      buttonText="Submit"
      />
      </Box>
      </Card>
    </Box>
    </Container>
    </>
  )
}

export default FinalReportSubmission