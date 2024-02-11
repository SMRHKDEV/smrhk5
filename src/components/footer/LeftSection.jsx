import siteDatas from "@/assets/datas";
import FooterBtn from "@/helper/FooterBtn";
import MyGrid from "@/helper/MyGrid";
import { Box, Typography } from "@mui/material";

export default function LeftSection() {
    const { footerLeftTitle, footerLeftLink } = siteDatas();
    return (
        <MyGrid xs={12} lg={4}>
            <Box component={'div'} className='left-section'>
                <Typography variant='h5'>{footerLeftTitle}</Typography>
                <Box component={'div'} display={'flex'} flexWrap={'nowrap'} alignItems={'center'} justifyContent={'center'} sx={{ marginBottom: '13px' }}>
                    <FooterBtn href='/' scroll={false} variant='outlined' sx={{ marginRight: '8px' }}>{footerLeftLink[0]}</FooterBtn>
                    <FooterBtn href='/' scroll={false} variant='outlined'>{footerLeftLink[1]}</FooterBtn>
                </Box>
                <Box component={'div'} display={'flex'} flexWrap={'nowrap'} alignItems={'center'} justifyContent={'center'} sx={{ marginBottom: '13px' }}>
                    <FooterBtn href='/' scroll={false} variant='outlined' sx={{ marginRight: '8px' }}>{footerLeftLink[2]}</FooterBtn>
                    <FooterBtn href='/' scroll={false} variant='outlined'>{footerLeftLink[3]}</FooterBtn>
                </Box>
                <Box component={'div'} display={'flex'} flexWrap={'nowrap'} alignItems={'center'} justifyContent={'center'}>
                    <FooterBtn href='/' scroll={false} variant='outlined' sx={{ marginRight: '8px' }}>{footerLeftLink[4]}</FooterBtn>
                    <FooterBtn href='/' scroll={false} variant='outlined'>{footerLeftLink[5]}</FooterBtn>
                </Box>
            </Box>
        </MyGrid>
    )
}