import MyGrid from "@/helper/MyGrid";
import { Box, Typography } from "@mui/material";

export default function SubFooter() {
    return (
        <MyGrid xs={12}>
            <Box component={'div'} className='sub-footer'>
                <Typography variant='inherit' textAlign={'center'}>
                    تمامی حقوق مادی معنوی سایت محفوظ می باشد.
                </Typography>
            </Box>
        </MyGrid>
    )
}