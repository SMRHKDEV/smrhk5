import { Box, Typography } from "@mui/material";

export default function SliderItem({ name, subTitle, txt }) {
    return (
        <div>
            <div style={{ padding: '8px' }}>
                <Box component={'div'} className="comment-slider-item" dir="rtl">
                    <Box component={'div'} display={'flex'} flexWrap={'nowrap'} alignItems={'center'} sx={{ marginBottom: '20px' }}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                        </Box>
                        <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                            <Typography variant="h6">{name}</Typography>
                            <Typography variant="inherit">{subTitle}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="inherit" className="txt">{txt}</Typography>
                    <Box component={'span'} className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                        </svg>
                    </Box>
                </Box>
            </div>
        </div>
    )
}