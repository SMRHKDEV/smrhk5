import MyGrid from "@/helper/MyGrid";
import { Box, Typography } from "@mui/material";

export default function Item({ logo, title, txt }) {
    return (
        <MyGrid xs={12} sm={6} lg={6} className={'intro-item'}>
            <Box component={'span'}>{logo}</Box>
            <div>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="inherit">{txt}</Typography>
            </div>
        </MyGrid>
    )
}