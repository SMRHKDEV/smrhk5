import siteDatas from "@/assets/datas";
import MyGrid from "@/helper/MyGrid";
import { Box, Button, Chip, Typography } from "@mui/material";


export default function VipCard() {
    const { vipCard } = siteDatas();

    const svgItem = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
    </svg>;


    return (
        <MyGrid xs={12} lg={6} container columnSpacing={2}>
            {vipCard.map((val, inx) => (
                <MyGrid key={inx} xs={12} md={6}>
                    <Box component={'div'} className="vip-card">
                        <Chip color={val.sub.color} variant="filled" className={'mychip'} label={val.sub.txt} />
                        <Box component={'div'} className="vip-card-header">
                            <Typography variant="h5">{val.title}</Typography>
                            <Box component={'span'}>{val.subTitle}</Box>
                            <Typography variant="inherit">{val.txt}</Typography>
                            <Button href="/" variant="outlined">{val.btn}</Button>
                        </Box>
                        <Box component={'div'} className="vip-card-list">
                            <Typography variant="h6">{val.boxTitle}</Typography>
                            <ul>
                                {val.items.map((li, ix) => (
                                    <li key={ix}>
                                        {svgItem}
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Box>
                </MyGrid>
            ))}
        </MyGrid>
    )
}