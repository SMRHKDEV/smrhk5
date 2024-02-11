import siteDatas from "@/assets/datas";
import MyGrid from "@/helper/MyGrid";
import VipBtn from "@/helper/VipBtn";
import { Box, Typography } from "@mui/material";


export default function CardTxt() {
    const { vipTitle, vipTxt, vipBtns } = siteDatas();
    return (
        <MyGrid xs={12} lg={6} className={'card-section-info'} pr={5}>
            <Typography variant="h5" display={'flex'} alignItems={'center'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gem" viewBox="0 0 16 16">
                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                </svg>
                {vipTitle}
            </Typography>
            <Typography variant="inherit">{vipTxt}</Typography>
            <Box component={'div'} display={'flex'}>
                {vipBtns.map((val, inx) => (
                    <VipBtn key={inx} txt={val} />
                ))}
            </Box>
        </MyGrid>
    )
}