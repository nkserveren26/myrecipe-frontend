import { Box, Typography } from '@mui/material';
import React from 'react';
import { HeroHeaderProps } from '../interface/interface';

export const HeroHeader: React.FC<HeroHeaderProps> = ({
    backgroundImage,
    title, 
    description,
    descriptionFontSize = 24
}) => {
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '600px',
                    overflow: 'hidden',
                    marginTop: '2%',
                    marginBottom: '4%',
                    borderRadius: '8px',
                }}
            >
                <Box
                    component="img"
                    src={backgroundImage}
                    alt="説明画像"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: `rgba(0, 0, 0, 0.35)`, // propsで渡された色と透明度を使用
                        zIndex: 2,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        zIndex: 3,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: `${descriptionFontSize}px` }}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}