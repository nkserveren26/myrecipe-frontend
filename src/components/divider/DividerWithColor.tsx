import { Box } from "@mui/material";
import { DividerWithColorProps } from "../interface/interface";

export const DividerWithColor: React.FC<DividerWithColorProps> = ({
    colorLeft = 'red',
    colorRight = 'rgba(0, 0, 0, 0)',
    thickness = '1px',
    marginY = 2,
    textWidth = '20%',
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                my: marginY,
            }}
        >
            {/* 左側（色付きで表示） */}
            <Box
                sx={{
                    width: textWidth,
                    borderBottom: `${thickness} solid ${colorLeft}`,
                }}
            />
            {/* 右側（透明に表示） */}
            <Box
                sx={{
                    flexGrow: 1,
                    borderBottom: `${thickness} solid ${colorRight}`,
                }}
            />
        </Box>
    );
}