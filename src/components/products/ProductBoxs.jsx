import MyGrid from "@/helper/MyGrid";
import TopBox from "./TopBox";
import MiddleBox from "./MiddleBox";
import BottomBox from "./BottomBox";

export default function ProductsBox() {
    return (
        <MyGrid xs={12} md={5} lg={4} pl={{ sm: '0', md: '24px' }}>
            <TopBox />
            <MiddleBox />
            <BottomBox />
        </MyGrid>
    )
}