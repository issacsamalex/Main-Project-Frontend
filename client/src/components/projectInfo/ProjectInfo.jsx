import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const ProjectInfo = ({ intern, handleClose }) => {
    const [project, setProject] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const navigate=useNavigate()
    useEffect(() => {
        console.log('Updated Project:', project);
    }, [project]);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleProjectSubmit = () => {
        setProject(intern.id);
        localStorage.setItem('selectedProject', intern.id);
        navigate('/project-dash')
        handleCloseDialog();
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby='customized-dialog-title'
            open={true}
        >
            <DialogTitle sx={{ m: 3, p: 2 }} id='customized-dialog-title'>
                {intern.name}
            </DialogTitle>
            <IconButton
                aria-label='close'
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <img
                    src={`./images/${intern.img}.jpg`}
                    height={150}
                    alt={intern.name}
                />
            </DialogContent>
            <DialogContent>
                <Typography gutterBottom>{intern.details}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleOpenDialog}>
                    Select
                </Button>
            </DialogActions>
            {/* Dialog for user verification of project */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Select Project</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to select this project, once chosen can't be changed?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                    <Button onClick={handleProjectSubmit}>
                        Select
                    </Button>
                </DialogActions>
            </Dialog>
        </BootstrapDialog>
    );
};

export default ProjectInfo;
