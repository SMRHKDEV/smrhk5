import { Box, Container, Step, StepLabel, Stepper } from '@mui/material';
import './index.scss';
import siteDatas from '@/assets/datas';

export default function Steps() {
    const { steps } = siteDatas()
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