import { Box, Button, TextField } from "@mui/material";

export default function ContactForm() {
    return (
        <Box component={'div'} className="contact-form" mt={3} px={3}>
            <form>
                <TextField id="outlined-basic" label="ایمیل" variant="outlined" sx={{ width: 1, '& input': { paddingRight: '100px' } }} />
                <Button type="submit" variant="contained" color="success">
                    دنبال کردن
                </Button>
            </form>
        </Box>
    )
}