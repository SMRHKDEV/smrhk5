import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import './index.scss';


export default function Contact() {
    return (
        <Box component={'section'} className="contact" id="contact">
            <Container>
                <Grid container alignItems={'center'}>
                    <Grid xs={12} lg={5}>
                        <Box component={'div'} className="mymap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12946.261339934224!2d51.37691975!3d35.78605219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07e8197af337%3A0xd8d775d8dd594af1!2sSa&#39;adat%20Abad%2C%20District%202%2C%20Tehran%2C%20Tehran%20Province!5e0!3m2!1sen!2s!4v1707224770867!5m2!1sen!2s" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    </Grid>
                    <Grid xs={12} lg={7} className={'contact-info'}>
                        <Typography variant="h4" textAlign={'center'}>
                            ارتباط با ما
                        </Typography>
                        <Typography variant="inherit" textAlign={'center'}>
                            من از انیمیشن به عنوان بُعد سوم استفاده می‌کنم که با آن تجربیات را ساده‌سازی می‌کنم و هر تعاملی را به چالش می‌کشم.
                        </Typography>
                        <Box component={'div'} display={'flex'} justifyContent={'space-evenly'} flexWrap={'wrap'}>
                            <Box component={'div'} className="contact-item" display={'flex'} flexWrap={'nowrap'} alignItems={'center'} >
                                <Box component={'span'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-earbuds" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.4 4.4 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.55.55 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563s-.561.994-.292 1.969.836 1.675 1.266 1.563m3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.4 4.4 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948m.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563s.561.994.292 1.969-.836 1.675-1.266 1.563" />
                                    </svg>
                                </Box>
                                <Box component={'div'} display={'flex'} flexDirection={'column'}>
                                    <Box component={'span'}>
                                        654-430-309
                                    </Box>
                                    <Box component={'span'}>
                                        6532-430-309
                                    </Box>
                                </Box>
                            </Box>
                            <Box component={'div'} className="contact-item" display={'flex'} flexWrap={'nowrap'} alignItems={'center'} >
                                <Box component={'span'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </Box>
                                <Box component={'div'} display={'flex'} flexDirection={'column'}>
                                    <Box component={'span'}>
                                        ایران ، تهران
                                    </Box>
                                    <Box component={'span'}>
                                        سعادت آباد ، خیابان فرعی
                                    </Box>
                                </Box>
                            </Box>
                            <Box component={'div'} className="contact-item" display={'flex'} flexWrap={'nowrap'} alignItems={'center'} >
                                <Box component={'span'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                    </svg>
                                </Box>
                                <Box component={'div'} display={'flex'} flexDirection={'column'}>
                                    <Box component={'span'}>
                                        contact@genz.com
                                    </Box>
                                    <Box component={'span'}>
                                        sales@genz.com
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box component={'div'} className="contact-form" mt={3} px={3}>
                            <form>
                                <TextField id="outlined-basic" label="ایمیل" variant="outlined" sx={{ width: 1, '& input': { paddingRight: '100px' } }} />
                                <Button type="submit" variant="contained" color="success">
                                    دنبال کردن
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}