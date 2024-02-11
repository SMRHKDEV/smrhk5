import MyGrid from "@/helper/MyGrid"
import Item from "./Item"

export default function ItemList({ items }) {
    return (
        <MyGrid xs={12} lg={7} container alignItems={'center'} className={'intro-box'}>
            {
                items.map((val, key) => (
                    <Item key={key} logo={val.logo} title={val.title} txt={val.txt} />
                ))
            }
        </MyGrid>
    )
}