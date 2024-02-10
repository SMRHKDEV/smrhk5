import { Box, Button, Typography } from "@mui/material";
import MyGrid from "@/helper/MyGrid";
import AnimateText from "./AnimateText";

export default function HeaderTxt() {
    return (
        <MyGrid xs={12} md={6} lg={7} className='main-header-info' sx={{ position: 'relative', zIndex: '10' }}>
            <Box component={'span'} className='sub-title'>
                سلام، خوش آمدید
            </Box>

            <AnimateText />

            <Typography variant='inherit' className='txt'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            </Typography>
            <Box component={'div'} className='btn-list'>
                <Button variant='contained' size='large' href='/' scroll={false}>
                    آشنایی بیشتر
                </Button>
                <Button variant='contained' size='large' href='/' scroll={false}>
                    شروع ماجرا
                </Button>
            </Box>
        </MyGrid>
    )
}