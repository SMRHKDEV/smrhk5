"use client"

import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export default function AnimateText() {
    return (
        <Typography variant='h1' className='title'>
            میلاد کریمی
            <br />
            من
            <TypeAnimation
                sequence={[
                    'برنامه نویس هستم',
                    1500,
                    'طراح سایت هستم',
                    1500,
                    'مدرس هستم',
                    1500,
                ]}
                speed={50}
                repeat={Infinity}
                style={{
                    minHeight: '45px'
                }}
            />
        </Typography>
    )
}