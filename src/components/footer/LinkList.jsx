import Link from 'next/link';
import MyGrid from "@/helper/MyGrid";
import { Box, Typography } from "@mui/material";

export default function LinkList() {
    return (
        <MyGrid xs={12} md={6} lg={3}>
            <Box component={'div'} className='center-section'>
                <Typography variant='h5'>
                    لینک ها
                </Typography>
                <ul>
                    <li>
                        <Link href={'/'}>صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link href={'/'}>محصولات</Link>
                    </li>
                    <li>
                        <Link href={'/'}>درباره ی ما</Link>
                    </li>
                    <li>
                        <Link href={'/'}>تماس با ما</Link>
                    </li>
                </ul>
            </Box>
        </MyGrid>
    )
}