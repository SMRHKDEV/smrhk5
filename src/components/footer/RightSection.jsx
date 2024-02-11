import siteDatas from "@/assets/datas";
import MyGrid from "@/helper/MyGrid";
import { Box, Typography } from "@mui/material";

export default function RightSection() {
    const { footerRightTitle, footerRightTxt, footerRightTxt1, footerRightTxt2, footerRightTxt3 } = siteDatas();
    return (
        <MyGrid xs={12} md={6} lg={5}>
            <Box component={'div'} className='right-section'>
                <Typography variant='h5'>
                    <Box component={'span'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                            <path d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
                        </svg>
                    </Box>
                    {footerRightTitle}
                </Typography>
                <Typography variant='inherit'>{footerRightTxt}</Typography>
                <Typography variant='h6'>{footerRightTxt1}</Typography>
                <Typography variant='inherit' m={'0 !important'}>{footerRightTxt2}</Typography>
                <Typography variant='inherit' m={'0 !important'}>{footerRightTxt3}</Typography>
            </Box>
        </MyGrid>
    )
}