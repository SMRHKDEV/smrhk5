import MyGrid from "@/helper/MyGrid";
import { Box } from "@mui/material";

export default function ContactMap() {
    return (
        <MyGrid xs={12} lg={5}>
            <Box component={'div'} className="mymap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12946.261339934224!2d51.37691975!3d35.78605219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e07e8197af337%3A0xd8d775d8dd594af1!2sSa&#39;adat%20Abad%2C%20District%202%2C%20Tehran%2C%20Tehran%20Province!5e0!3m2!1sen!2s!4v1707224770867!5m2!1sen!2s" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </MyGrid>
    )
}