import React from 'react';
import { Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { ErrorMessageProps } from '../interface/interface';


export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <>
            <Typography sx={{
                color: 'red', 
                display: 'flex',
                alignItems: 'center', 
                mt: 1
            }}>
                <ErrorIcon sx={{ mr: 1, fontSize: '20px' }} /> {/* ビックリマークアイコン */}
                {message}
            </Typography>
        </>
    )
}