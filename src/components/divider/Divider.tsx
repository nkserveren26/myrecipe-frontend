import { Box } from "@mui/material";
import React from "react";
import { DividerProps } from "../interface/interface";

export const Divider: React.FC<DividerProps> = ({
    color = 'rgba(0, 0, 0, 0.1)',
    thickness = '1px',
    marginY = 2,
}) => {
    return (
        <Box
            sx={{
                borderBottom: `${thickness} solid ${color}`,
                my: marginY,
            }}
        />
    );
}