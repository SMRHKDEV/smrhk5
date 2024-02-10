"use client";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.scss';

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const Logo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" /></svg>
    return (
        <Box component={'section'} className="faqs">
            <Container>
                <Grid container>
                    <Grid xs={12}>
                        <Typography variant="h4" textAlign={'center'} mb={5}>
                            سوالات متداول
                        </Typography>
                        <div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ background: 'transparent', boxShadow: 'none', margin: '0', '&.MuiPaper-root::before': { opacity: 1 } }}>
                                <AccordionSummary
                                    expandIcon={Logo}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    sx={{ padding: '18px 0', color: '#b9e0f2', '& .MuiAccordionSummary-content': { margin: '0' } }}
                                >
                                    <Typography>چرا ما را انتخاب کنید؟</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ background: 'transparent', boxShadow: 'none', margin: '0', '&.MuiPaper-root::before': { opacity: 1 } }}>
                                <AccordionSummary
                                    expandIcon={Logo}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                    sx={{ padding: '18px 0', color: '#b9e0f2', '& .MuiAccordionSummary-content': { margin: '0' } }}
                                >
                                    <Typography>
                                        شناسایی منبع مشکل
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ background: 'transparent', boxShadow: 'none', margin: '0', '&.MuiPaper-root::before': { opacity: 1 } }}>
                                <AccordionSummary
                                    expandIcon={Logo}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                    sx={{ padding: '18px 0', color: '#b9e0f2', '& .MuiAccordionSummary-content': { margin: '0' } }}
                                >
                                    <Typography>
                                        حفاظت از نام تجاری
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ background: 'transparent', boxShadow: 'none', margin: '0', '&.MuiPaper-root::before': { opacity: 1 } }}>
                                <AccordionSummary
                                    expandIcon={Logo}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    sx={{ padding: '18px 0', color: '#b9e0f2', '& .MuiAccordionSummary-content': { margin: '0' } }}
                                >
                                    <Typography>
                                        ما خلاق و حرفه‌ای هستیم
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}