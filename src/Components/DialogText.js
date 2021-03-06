import React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';

export default function DialogText(props) {
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    const {open, header, setOpen, message} = props;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                {header}
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {message}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button href="/players" autoFocus onClick={handleClose}>
                    OK
                </Button>
            </DialogActions>
        </BootstrapDialog>
    )
}

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};