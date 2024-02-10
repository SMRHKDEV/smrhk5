import { Box, Container, Step, StepLabel, Stepper } from '@mui/material';
import './index.scss';

export default function Steps() {

    const steps = [
        'انتخاب محصول مورد نظر',
        'ارتباط با مشاوران ما و ثبت سفارش محصول',
        'ارسل رایگان محصول',
        'دریافت محصول درب منزل'
    ];
    return (
        <Box component={'section'} className='steps'>
            <Container>
                <Box sx={{ width: '100%', padding: '35px 0 35px' }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Container>
        </Box>
    )
}