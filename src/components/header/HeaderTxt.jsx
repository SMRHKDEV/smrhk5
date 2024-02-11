import { Box, Typography } from "@mui/material";
import AnimateText from "./AnimateText";
import MyGrid from "@/helper/MyGrid";
import HeaderBtn from "@/helper/HeaderBtn";
import siteDatas from "@/assets/datas";


export default function HeaderTxt() {
    const { headerTitle, headerTxt, headerBtn1, headerBtn2 } = siteDatas();
    return (
        <MyGrid xs={12} md={6} lg={7} className='main-header-info' sx={{ position: 'relative', zIndex: '10' }}>
            <Box component={'span'} className='sub-title'>{headerTitle}</Box>
            <AnimateText />
            <Typography variant='inherit' className='txt'>{headerTxt}</Typography>
            <Box component={'div'} className='btn-list'>
                <HeaderBtn variant='contained' size='large' href='/' scroll={false}>{headerBtn1}</HeaderBtn>
                <HeaderBtn variant='contained' size='large' href='/' scroll={false}>{headerBtn2}</HeaderBtn>
            </Box>
        </MyGrid>
    )
}