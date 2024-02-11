import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import MyContainer from "@/helper/MyContainer";
import MyGrid from "@/helper/MyGrid";
import MyAccordion from "./MyAccordion";

import './index.scss';
import siteDatas from "@/assets/datas";


export default function Faq() {
    const { faqTitle } = siteDatas();

    return (
        <Box component={'section'} className="faqs">
            <MyContainer>
                <MyGrid xs={12}>
                    <Typography variant="h4" textAlign={'center'} mb={5}>{faqTitle}</Typography>
                    <MyAccordion />
                </MyGrid>
            </MyContainer>
        </Box >
    )
}