import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { RecipeEditForm } from '../form/RecipeEditForm';

export const DropdownButton: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
    // ボタンがクリックされたときに呼ばれるハンドラ
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // メニューが閉じられたときに呼ばれるハンドラ
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon />}
            >
                Action
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl} // メニューのアンカー要素を設定
                keepMounted
                open={Boolean(anchorEl)} // anchorElがnullでない場合、メニューを表示
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
        </div>
    );
};