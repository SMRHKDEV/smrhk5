import MyGrid from "@/helper/MyGrid"
import { Box, Button, Chip, Typography } from "@mui/material"
import Image from "next/image"

export default function ProductList() {
    const myStyle = {
        display: {
            xs: 'flex',

        },
        flexWrap: 'nowrap',
        flexDirection: {
            xs: 'column',
            lg: 'row'
        }
    }
    return (
        <MyGrid xs={12} md={7} lg={8} className="product-list">
            <Box component={'div'} className="title">
                <Typography variant="h4">
                    لیست محصولات
                </Typography>
                <Typography variant="inherit">
                    لورم ایپسوم متن ساختگی با توله از طراحان گرافیک است.
                </Typography>
            </Box>
            <Box component={'div'} className="product-body-list">
                <Button href="/" sx={{ width: 1, display: 'block', padding: 0 }}>
                    <Box component={'div'} className='item' sx={myStyle}>
                        <Box component={'div'} className="item-img">
                            <Image src={'/images/person.jpg'} width={250} height={250} alt="person" />
                        </Box>
                        <Box component={'div'} sx={{ flexGrow: 1 }} className="item-txt">
                            <div>
                                <Chip label="محصول نوع اول" sx={{ marginBottom: '10px' }} />
                            </div>
                            <Typography variant="h4" sx={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                                راه آسان برای  از محیط  در خانه
                            </Typography>
                            <Typography variant="inherit">
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                            </Typography>
                            <Box component={'span'} className="item-status non-status">ناموجود</Box>
                        </Box>
                    </Box>
                </Button>
                <Button href="/" sx={{ width: 1, display: 'block', padding: 0 }}>
                    <Box component={'div'} className='item' sx={myStyle}>
                        <Box component={'div'} className="item-img">
                            <Image src={'/images/person.jpg'} width={250} height={250} alt="person" />
                        </Box>
                        <Box component={'div'} sx={{ flexGrow: 1 }} className="item-txt">
                            <div>
                                <Chip label="محصول نوع اول" sx={{ marginBottom: '10px' }} />
                            </div>
                            <Typography variant="h4" sx={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                                راه آسان برای  از محیط  در خانه
                            </Typography>
                            <Typography variant="inherit">
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                            </Typography>
                            <Box component={'span'} className="item-status">موجود</Box>
                        </Box>
                    </Box>
                </Button>
                <Button href="/" sx={{ width: 1, display: 'block', padding: 0 }}>
                    <Box component={'div'} className='item' sx={myStyle}>
                        <Box component={'div'} className="item-img">
                            <Image src={'/images/person.jpg'} width={250} height={250} alt="person" />
                        </Box>
                        <Box component={'div'} sx={{ flexGrow: 1 }} className="item-txt">
                            <div>
                                <Chip label="محصول نوع اول" sx={{ marginBottom: '10px' }} />
                            </div>
                            <Typography variant="h4" sx={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                                راه آسان برای  از محیط  در خانه
                            </Typography>
                            <Typography variant="inherit">
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                            </Typography>
                            <Box component={'span'} className="item-status non-status">ناموجود</Box>
                        </Box>
                    </Box>
                </Button>
                <Button href="/" sx={{ width: 1, display: 'block', padding: 0 }}>
                    <Box component={'div'} className='item' sx={myStyle}>
                        <Box component={'div'} className="item-img">
                            <Image src={'/images/person.jpg'} width={250} height={250} alt="person" />
                        </Box>
                        <Box component={'div'} sx={{ flexGrow: 1 }} className="item-txt">
                            <div>
                                <Chip label="محصول نوع اول" sx={{ marginBottom: '10px' }} />
                            </div>
                            <Typography variant="h4" sx={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                                راه آسان برای  از محیط  در خانه
                            </Typography>
                            <Typography variant="inherit">
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                            </Typography>
                            <Box component={'span'} className="item-status">موجود</Box>
                        </Box>
                    </Box>
                </Button>
                <Button href="/" sx={{ width: 1, display: 'block', padding: 0 }}>
                    <Box component={'div'} className='item' sx={myStyle}>
                        <Box component={'div'} className="item-img">
                            <Image src={'/images/person.jpg'} width={250} height={250} alt="person" />
                        </Box>
                        <Box component={'div'} sx={{ flexGrow: 1 }} className="item-txt">
                            <div>
                                <Chip label="محصول نوع اول" sx={{ marginBottom: '10px' }} />
                            </div>
                            <Typography variant="h4" sx={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                                راه آسان برای  از محیط  در خانه
                            </Typography>
                            <Typography variant="inherit">
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                            </Typography>
                            <Box component={'span'} className="item-status">موجود</Box>
                        </Box>
                    </Box>
                </Button>
                <Button href="/" sx={{ width: 1, display: 'block', padding: 0 }}>
                    <Box component={'div'} className='item' sx={myStyle}>
                        <Box component={'div'} className="item-img">
                            <Image src={'/images/person.jpg'} width={250} height={250} alt="person" />
                        </Box>
                        <Box component={'div'} sx={{ flexGrow: 1 }} className="item-txt">
                            <div>
                                <Chip label="محصول نوع اول" sx={{ marginBottom: '10px' }} />
                            </div>
                            <Typography variant="h4" sx={{ fontSize: '1.25rem', marginBottom: '16px' }}>
                                راه آسان برای  از محیط  در خانه
                            </Typography>
                            <Typography variant="inherit">
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                                گام‌های کوچک اما تاثیرگذار را به سمت حفظ محیط زیست و پایداری در آسایش خانه خود بردارید و به یک سیاره سبزتر کمک کنید.
                            </Typography>
                            <Box component={'span'} className="item-status">موجود</Box>
                        </Box>
                    </Box>
                </Button>
            </Box>
        </MyGrid>
    )
}