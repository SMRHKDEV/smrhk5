import Image from "next/image";
import { Box, Button, Chip, Typography } from "@mui/material";

export default function ProductItem({ data }) {
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
        <Button href={data.link} sx={{ width: 1, display: 'block', padding: 0 }}>
            <Box component={'div'} className='item' sx={myStyle}>
                <Box component={'div'} className="item-img">
                    <Image src={data.img} width={250} height={250} alt="person" />
                </Box>
                <Box component={'div'} sx={{ flexGrow: 1 }} className="item-txt">
                    <div>
                        <Chip label={data.label} sx={{ marginBottom: '10px' }} />
                    </div>
                    <Typography variant="h4" sx={{ fontSize: '1.25rem', marginBottom: '16px' }}>{data.title}</Typography>
                    <Typography variant="inherit">{data.txt} </Typography>
                    <Box component={'span'} className={data.status === 'موجود' ? "item-status" : "item-status non-status"}>{data.status}</Box>
                </Box>
            </Box>
        </Button>
    )
}