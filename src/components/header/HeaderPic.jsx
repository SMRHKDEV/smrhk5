import Image from "next/image";
import MyGrid from "@/helper/MyGrid";
import { Box } from "@mui/material";

export default function HeaderPic() {
    return (
        <MyGrid xs={12} md={6} lg={5} textAlign={'center'} sx={{ position: 'relative', zIndex: '10' }}>
            <Box component={'div'} className='main-header-imgs'>
                <div className="img-01">
                    <Image src={'/images/person.jpg'} alt={"تصویر"} width={500} height={500} priority={true} />
                </div>
                <div className="img-02">
                    <Image src={'/images/01.jpg'} alt={"تصویر"} width={325} height={325} />
                </div>
            </Box>
        </MyGrid>
    )
}