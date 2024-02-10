import { Box, Container, Typography } from "@mui/material";
import MySlider from "./MySlider";
import './index.scss';


export default function Comment() {
    return (
        <Box component={'section'} className="comment">
            <Container>
                <Typography variant="h4" textAlign={'center'}>
                    نظرات کاربران
                </Typography>
                <Typography variant="inherit" textAlign={'center'} className="txt-title">
                    لورم ایپسوم متن ساختگی با توله از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که آینده شناخت فراوان جامعه و متخصصان
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                </Typography>
                <MySlider />
            </Container>
        </Box>
    )
}