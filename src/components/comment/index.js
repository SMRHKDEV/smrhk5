import { Box, Container, Typography } from "@mui/material";
import MySlider from "./MySlider";
import './index.scss';
import siteDatas from "@/assets/datas";


export default function Comment() {
    const { commentTitle, commentTxt } = siteDatas();
    return (
        <Box component={'section'} className="comment">
            <Container>
                <Typography variant="h4" textAlign={'center'}>{commentTitle}</Typography>
                <Typography variant="inherit" textAlign={'center'} className="txt-title">{commentTxt}</Typography>
                <MySlider />
            </Container>
        </Box>
    )
}