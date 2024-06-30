import { FC } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import {Typography} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // プライマリカラーを黒色に指定
    },
  },
  typography: {
    fontFamily: "Georgia",
  },
});

type HeaderProps = {
    title:string
};

export const Header:FC<HeaderProps> = (props) => {
    const { title } = props; 
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" elevation={0}>
            <Toolbar disableGutters={true}>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
      </ThemeProvider>
    );
};
