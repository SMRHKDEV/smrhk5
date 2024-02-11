import { Box } from "@mui/material";
import MyContainer from "@/helper/MyContainer";
import CardTxt from "./CardTxt";
import VipCard from "./VipCard";
import './index.scss';


export default function CardSection() {
    return (
        <Box component={'section'} className="card-section">
            <MyContainer alignItems={'center'}>
                <CardTxt />
                <VipCard />
            </MyContainer>
        </Box>
    )
}