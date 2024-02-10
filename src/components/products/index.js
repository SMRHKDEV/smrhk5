import { Box } from "@mui/material";

import './index.scss';

import ProductsBox from "./ProductBoxs";
import ProductList from "./ProductList";
import MyContainer from "@/helper/MyContainer";


export default function Products() {

    return (
        <Box component={'section'} className="products" id="products">
            <MyContainer>
                <ProductList />
                <ProductsBox />
            </MyContainer>
        </Box>
    )
}