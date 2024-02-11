import { Box, Typography } from "@mui/material";

import MyContainer from "@/helper/MyContainer";
import MyGrid from "@/helper/MyGrid";
import ItemList from "./ItemList";
import siteDatas from "@/assets/datas";

import './index.scss';


export default function Intro() {
    const { introTitle, introTxt, items } = siteDatas();
    return (
        <Box component={'section'} className="intro">
            <MyContainer alignItems={'center'}>
                <MyGrid xs={12} lg={5} px={2} mb={{ xs: '26px', lg: 0 }}>
                    <Typography variant="h4">{introTitle}</Typography>
                    <Typography variant="inherit" className="intro-txt">{introTxt}</Typography>
                </MyGrid>

                <ItemList items={items} />
            </MyContainer>
        </Box>
    )
}