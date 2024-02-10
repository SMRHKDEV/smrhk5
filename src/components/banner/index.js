import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import './index.scss';
import MyContainer from "@/helper/MyContainer";


export default function Banner() {
    return (
        <Box component={'section'} className="banner">
            <MyContainer>
                <Grid container>
                    <Grid xs={12}>
                        <Box component={'div'} className="mybanner">
                            <Image src={'/images/banner.png'} width={327} height={490} alt="تصویر" priority={true} />
                            <Box component={'div'} className="mybanner-txt">
                                <Typography variant="inherit">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                                </Typography>
                                <Typography variant="inherit">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </MyContainer>
        </Box>
    )
}