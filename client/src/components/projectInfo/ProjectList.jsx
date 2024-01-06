import React, { Fragment, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import ProjectInfo from './ProjectInfo';


const ProjectList = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenDialog = (project) => {
        setSelectedProject(project);
    };

    const handleCloseDialog = () => {
        setSelectedProject(null);
    };

    const internshipData = [
        {
            'id': '001',
            'name': 'Web Development',
            'details': 'Internship on Web development',
            'img': 'web-development',
        },
        {
            'id': '002',
            'name': 'AI-ML',
            'details': 'Internship on AI-ML',
            'img': 'ai-ml',
        },
    ];

    return (
        <Fragment>
            <Grid container spacing={2}>
                {internshipData.map((intern) => (
                    <Grid item key={intern.id} xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    height='140'
                                    image={`./images/${intern.img}.jpg`}
                                    alt={intern.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='div'>
                                        {intern.name}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        {intern.details}
                                    </Typography>
                                </CardContent>
                                <Button onClick={() => handleOpenDialog(intern)}>
                                    Click Here to know more details
                                </Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {selectedProject && (
                <ProjectInfo intern={selectedProject} handleClose={handleCloseDialog} />
            )}
        </Fragment>
    );
};

export default ProjectList;
