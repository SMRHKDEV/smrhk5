import Image from "next/image";
import { Box, Typography } from "@mui/material";
import MyContainer from "@/helper/MyContainer";
import MyGrid from "@/helper/MyGrid";
import siteDatas from "@/assets/datas";

import './index.scss';


export default function Banner() {
    const { bannerTxt1, bannerTxt2 } = siteDatas();
    return (
        <Box component={'section'} className="banner">
            <MyContainer>
                <MyGrid container>
                    <MyGrid xs={12}>
                        <Box component={'div'} className="mybanner">
                            <Image src={'/images/banner.png'} width={327} height={490} alt="تصویر" priority={true} />
                            <Box component={'div'} className="mybanner-txt">
                                <Typography variant="inherit">{bannerTxt1}</Typography>
                                <Typography variant="inherit">{bannerTxt2}</Typography>
                            </Box>
                        </Box>
                    </MyGrid>
                </MyGrid>
            </MyContainer>
        </Box>
    )
}