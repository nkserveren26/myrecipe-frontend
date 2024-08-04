import React from 'react';
import { Typography } from '@mui/material';
import { RequiredLabelProps } from '../interface/interface';


export const RequiredLabel: React.FC<RequiredLabelProps> = ({
    text = "(必須)",
    fontSize = '16px'}) => {
    return (
        <>
            <Typography component="span" sx={{ color: 'red', fontSize }}>
                {text}
            </Typography>
        </>
    );
}