import MyGrid from "@/helper/MyGrid";
import { Avatar, AvatarGroup, Box, Button, Chip, Typography } from "@mui/material";

export default function ProductsBox() {
    return (
        <MyGrid xs={12} md={5} lg={4} pl={{ sm: '0', md: '24px' }}>
            <Box component={'div'} className="product-box">
                <Typography variant="h5">
                    بهترین انتخاب محصول
                </Typography>
                <div className="product-box-detail">
                    <Typography variant="h6" display={'flex'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                            </svg>
                        </Box>
                        مواد اولبه عالی و جدید همراه با کیفیت مناسب در این مجموعه زیبا و قشمگ
                    </Typography>
                    <Typography variant="inherit">
                        بیش از 12 نوع
                    </Typography>
                </div>
                <div className="product-box-detail">
                    <Typography variant="h6" display={'flex'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                            </svg>
                        </Box>
                        مواد اولبه عالی و جدید همراه با  و قشمگ
                    </Typography>
                    <Typography variant="inherit">
                        بیش از 12 نوع بیش از
                    </Typography>
                </div>
                <div className="product-box-detail">
                    <Typography variant="h6" display={'flex'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                            </svg>
                        </Box>
                        مواد اولبه عالی و جدید همراه با کیفیت
                    </Typography>
                    <Typography variant="inherit">
                        بیش از 12 نوع مناسب در این   و قشمگ
                    </Typography>
                </div>
                <div className="product-box-detail">
                    <Typography variant="h6" display={'flex'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                            </svg>
                        </Box>
                        مواد اولبه عالی و جدید همراه  کیفیت
                    </Typography>
                    <Typography variant="inherit">
                        بیش از 12 نوع همراه  کیفیت
                    </Typography>
                </div>
                <div className="product-box-detail">
                    <Typography variant="h6" display={'flex'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                            </svg>
                        </Box>
                        مواد اولبه عالی و جدید همراه  کیفیت
                    </Typography>
                    <Typography variant="inherit">
                        بیش   نوع همراه  کیفیت
                    </Typography>
                </div>
            </Box>
            <Box component={'div'} className="product-box-txt">
                <Typography variant="inherit" textAlign={'center'}>
                    من از انیمیشن به عنوان بُعد سوم استفاده می‌کنم که با آن تجربیات را ساده‌سازی می‌کنم و هر تعاملی را به چالش می‌کشم. من حرکت را صرفاً برای اصلاح چیزها اضافه نمی کنم، بلکه آن را به روش هایی انجام می دهم.
                </Typography>
                <Box component={'div'}>
                    <AvatarGroup max={5} sx={{ justifyContent: 'center', marginTop: '13px' }}>
                        <Avatar alt="Remy Sharp" src="/images/person.jpg" sx={{
                            '&.MuiAvatar-root': {
                                borderColor: '#66768f'
                            }
                        }} />
                        <Avatar alt="Travis Howard" src="/images/person.jpg" sx={{
                            '&.MuiAvatar-root': {
                                borderColor: '#66768f'
                            }
                        }} />
                        <Avatar alt="Cindy Baker" src="/images/person.jpg" sx={{
                            '&.MuiAvatar-root': {
                                borderColor: '#66768f'
                            }
                        }} />
                        <Avatar alt="Agnes Walker" src="/images/person.jpg" sx={{
                            '&.MuiAvatar-root': {
                                borderColor: '#66768f'
                            }
                        }} />
                        <Avatar sx={{
                            bgcolor: '#ff756c', color: "#0f172a", fontSize: '13px', fontWeight: '700', '&.MuiAvatar-root': {
                                borderColor: '#ff756c'
                            }
                        }}>+20</Avatar>
                    </AvatarGroup>
                </Box>
            </Box>
            <Box component={'div'} className="product-box" sx={{ position: 'relative', zIndex: 10 }}>
                <Typography variant="h5">
                    راه های ارتباطی و سفارش
                </Typography>
                <div className="product-box-detail">
                    <Box component={'div'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" display={'flex'}>
                            <Box component={'span'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                </svg>
                            </Box>
                            تلگرام
                        </Typography>
                        <Chip label="Telegram" sx={{ fontSize: '0.7rem !important', backgroundColor: 'rgba(171, 104, 0, 0.15)', border: '1px solid rgba(209, 142, 0, 0.3)' }} />
                    </Box>
                    <Typography variant="inherit" sx={{ padding: '8px 0 !important', marginBottom: '0 !important', '&::after': { display: 'none' } }} textAlign={'justify'}>
                        من از انیمیشن به عنوان بُعد سوم استفاده می‌کنم که با آن تجربیات را ساده‌سازی می‌کنم و هر تعاملی را به چالش می‌کشم.
                    </Typography>
                    <Box textAlign={'center'} mt={'3px'}>
                        <Button href="" sx={{ width: '80%', margin: '0 auto 24px', border: '1px solid #66768f' }}>
                            اتصال به تگرام
                        </Button>
                    </Box>
                </div>
                <div className="product-box-detail">
                    <Box component={'div'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" display={'flex'}>
                            <Box component={'span'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                </svg>
                            </Box>
                            واتساپ
                        </Typography>
                        <Chip label="WhatsApp" sx={{ fontSize: '0.7rem !important', backgroundColor: 'rgba(171, 104, 0, 0.15)', border: '1px solid rgba(209, 142, 0, 0.3)' }} />
                    </Box>
                    <Typography variant="inherit" sx={{ padding: '8px 0 !important', marginBottom: '0 !important', '&::after': { display: 'none' } }} textAlign={'justify'}>
                        من از انیمیشن  که با آن تجربیات را ساده‌سازی می‌کنم و هر تعاملی را به چالش می‌کشم.
                    </Typography>
                    <Box textAlign={'center'} mt={'3px'}>
                        <Button href="" sx={{ width: '80%', margin: '0 auto 24px', border: '1px solid #66768f' }}>
                            اتصال به واتساپ
                        </Button>
                    </Box>
                </div>
                <div className="product-box-detail">
                    <Box component={'div'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" display={'flex'}>
                            <Box component={'span'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </Box>
                            اینستاگرام
                        </Typography>
                        <Chip label="Instagram" sx={{ fontSize: '0.7rem !important', backgroundColor: 'rgba(171, 104, 0, 0.15)', border: '1px solid rgba(209, 142, 0, 0.3)' }} />
                    </Box>
                    <Typography variant="inherit" sx={{ padding: '8px 0 !important', marginBottom: '0 !important', '&::after': { display: 'none' } }} textAlign={'justify'}>
                        من از انیمیشن به عنوان بُعد سوم استفاده می‌کنم که با آن تجربیات را ساده‌سازی می‌کنم و هر تعاملی را به چالش می‌کشم.
                    </Typography>
                    <Box textAlign={'center'} mt={'3px'}>
                        <Button href="" sx={{ width: '80%', margin: '0 auto 24px', border: '1px solid #66768f' }}>
                            اتصال به اینستاگرام
                        </Button>
                    </Box>
                </div>
                <div className="product-box-detail">
                    <Box component={'div'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant="h6" display={'flex'}>
                            <Box component={'span'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                </svg>
                            </Box>
                            توییتر
                        </Typography>
                        <Chip label="Twitter" sx={{ fontSize: '0.7rem !important', backgroundColor: 'rgba(171, 104, 0, 0.15)', border: '1px solid rgba(209, 142, 0, 0.3)' }} />
                    </Box>
                    <Typography variant="inherit" sx={{ padding: '8px 0 !important', marginBottom: '0 !important', '&::after': { display: 'none' } }} textAlign={'justify'}>
                        من از انیمیشن به عنوان بُعد سوم استفاده می‌کنم  و هر تعاملی را به چالش می‌کشم.
                    </Typography>
                    <Box textAlign={'center'} mt={'3px'}>
                        <Button href="" sx={{ width: '80%', margin: '0 auto', border: '1px solid #66768f' }}>
                            اتصال به توییتر
                        </Button>
                    </Box>
                </div>
            </Box>
        </MyGrid>
    )
}