import siteDatas from "@/assets/datas";
import { Box, Typography } from "@mui/material";

export default function TopBox() {

    const logo = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
    </svg>;

    const { topBoxTitle, topBoxItem } = siteDatas();

    return (
        <Box component={'div'} className="product-box">
            <Typography variant="h5">{topBoxTitle}</Typography>
            {topBoxItem.map((val, inx) => (
                <div key={inx} className="product-box-detail">
                    <Typography variant="h6" display={'flex'}>
                        <Box component={'span'}>{logo}</Box>
                        {val.title}
                    </Typography>
                    <Typography variant="inherit">{val.txt}</Typography>
                </div>
            ))}
        </Box>
    )
}