"use client";

import { useState } from 'react';
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import siteDatas from '@/assets/datas';


export default function MyAccordion() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const Logo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" /></svg>;

    const { faqQuestions } = siteDatas();


    return (
        <div>
            {faqQuestions.map((val, inx) => (
                <Accordion key={inx} expanded={expanded === val.panel} onChange={handleChange(val.panel)} sx={{ background: 'transparent', boxShadow: 'none', margin: '0', '&.MuiPaper-root::before': { opacity: 1 } }}>
                    <AccordionSummary
                        expandIcon={Logo}
                        aria-controls="panel1bh-content"
                        id={`panel1bh-header${val.panel}`}
                        sx={{ padding: '18px 0', color: '#b9e0f2', '& .MuiAccordionSummary-content': { margin: '0' } }}
                    >
                        <Typography>{val.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{val.txt}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))
            }
        </div>
    )
}