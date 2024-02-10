import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import './index.scss';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <Container>
                <Grid container>
                    <Grid xs={12} md={6} lg={5}>
                        <Box component={'div'} className='right-section'>
                            <Typography variant='h5'>
                                <Box component={'span'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                                        <path d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" />
                                    </svg>
                                </Box>
                                موفقیت و پیروزی
                            </Typography>
                            <Typography variant='inherit'>
                                با آن من از انیمیشن به عنوان بُعد سوم استفاده می‌کنم که با آن تجربیات را ساده‌سازی می‌کنم و هر تعاملی را به چالش می‌کشم. من حرکت را صرفاً برای اصلاح چیزها اضافه نمی کنم، بلکه آن را به روش هایی انجام می دهم.تجربیات را ساده‌سازی می‌کنم
                            </Typography>
                            <Typography variant='h6'>
                                آدرس
                            </Typography>
                            <Typography variant='inherit' m={'0 !important'}>
                                ایران ، تهران
                            </Typography>
                            <Typography variant='inherit' m={'0 !important'}>
                                خیابان اول ، کوچه دوم ، پلاک ، واحد
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>
                        <Box component={'div'} className='center-section'>
                            <Typography variant='h5'>
                                لینک ها
                            </Typography>
                            <ul>
                                <li>
                                    <Link href={'/'}>صفحه اصلی</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>صفحه اصلی</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>صفحه اصلی</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>صفحه اصلی</Link>
                                </li>
                                <li>
                                    <Link href={'/'}>صفحه اصلی</Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid xs={12} lg={4}>
                        <Box component={'div'} className='left-section'>
                            <Typography variant='h5'>
                                پربازدید ترین ها
                            </Typography>
                            <Box component={'div'} display={'flex'} flexWrap={'nowrap'} alignItems={'center'} justifyContent={'center'} sx={{ marginBottom: '13px' }}>
                                <Button href='/' scroll={false} variant='outlined' sx={{ marginRight: '8px' }}>
                                    خرید محصول
                                </Button>
                                <Button href='/' scroll={false} variant='outlined'>
                                    محصول جدید
                                </Button>
                            </Box>
                            <Box component={'div'} display={'flex'} flexWrap={'nowrap'} alignItems={'center'} justifyContent={'center'} sx={{ marginBottom: '13px' }}>
                                <Button href='/' scroll={false} variant='outlined' sx={{ marginRight: '8px' }}>
                                    خرید اول
                                </Button>
                                <Button href='/' scroll={false} variant='outlined'>
                                    محصول جدیدترین سال
                                </Button>
                            </Box>
                            <Box component={'div'} display={'flex'} flexWrap={'nowrap'} alignItems={'center'} justifyContent={'center'}>
                                <Button href='/' scroll={false} variant='outlined' sx={{ marginRight: '8px' }}>
                                    خرید محصول
                                </Button>
                                <Button href='/' scroll={false} variant='outlined'>
                                    محصول جدید
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12}>
                        <Box component={'div'} className='sub-footer'>
                            <Typography variant='inherit' textAlign={'center'}>
                                تمامی حقوق مادی معنوی سایت محفوظ می باشد.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}