import siteDatas from "@/assets/datas";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

export default function MiddleBox() {
    const imgs = ['/images/person.jpg', '/images/person.jpg', '/images/person.jpg', '/images/person.jpg'];
    const customeStyle = {
        '&.MuiAvatar-root': {
            borderColor: '#66768f'
        }
    };
    const { middleBoxTitle } = siteDatas();

    return (
        <Box component={'div'} className="product-box-txt">
            <Typography variant="inherit" textAlign={'center'}>{middleBoxTitle}</Typography>
            <Box component={'div'}>
                <AvatarGroup max={5} sx={{ justifyContent: 'center', marginTop: '13px' }}>
                    {imgs.map((val, inx) => (
                        <Avatar key={inx} alt="تصویر" src={val} sx={customeStyle} />
                    ))}
                    <Avatar sx={{
                        bgcolor: '#ff756c', color: "#0f172a", fontSize: '13px', fontWeight: '700', '&.MuiAvatar-root': {
                            borderColor: '#ff756c'
                        }
                    }}>+20</Avatar>
                </AvatarGroup>
            </Box>
        </Box>
    )
}