import { FC } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import {Typography} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // プライマリカラーを黒色に指定
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

type HeaderProps = {
    title:string
};

export const Header:React.FC<HeaderProps> = (props) => {
    const { title } = props;
    const navigate = useNavigate();

    const handleTitleClick = () => {
      navigate('/');
    };
    
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" elevation={0}>
            <Toolbar disableGutters={true}>
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                fontWeight: 'bold',
                cursor: 'pointer',
                userSelect: 'none'  // テキスト選択を無効にする
              }}
              onClick={handleTitleClick}
            >
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
      </ThemeProvider>
    );
};
