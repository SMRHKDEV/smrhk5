import { Box, Container, Typography } from "@mui/material";

import './index.scss';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MyContainer from "@/helper/MyContainer";
import MyGrid from "@/helper/MyGrid";


export default function Intro() {
    return (
        <Box component={'section'} className="intro">
            <MyContainer alignItems={'center'}>
                <MyGrid xs={12} lg={5} px={2} mb={{ xs: '26px', lg: 0 }}>
                    <Typography variant="h4">
                        به شرکت ما خوش آمدید
                    </Typography>
                    <Typography variant="inherit" className="intro-txt">
                        لورم ایپسوم متن ساختگی با توله از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که آینده شناخت فراوان جامعه و متخصصان
                    </Typography>
                    <Typography variant="inherit" className="intro-txt">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که آینده شناخت فراوان جامعه و متخصصان
                    </Typography>
                </MyGrid>
                <MyGrid xs={12} lg={7} container alignItems={'center'} className={'intro-box'}>
                    <Grid xs={12} sm={6} lg={6} className={'intro-item'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-rocket" viewBox="0 0 16 16">
                                <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8" />
                                <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.5 3.5 0 0 0-.463-.315A2 2 0 0 0 8.25.064.55.55 0 0 0 8 0a.55.55 0 0 0-.266.073 2 2 0 0 0-.142.08 4 4 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635s1.7-.207 2.4-.635q.1.044.196.083c.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562zM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935zM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199M8.009 1.073q.096.06.226.163c.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13s-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32q.136-.113.236-.18Z" />
                                <path d="M9.479 14.361c-.48.093-.98.139-1.479.139s-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0z" />
                            </svg>
                        </Box>
                        <div>
                            <Typography variant="h6">
                                طراحی سایت
                            </Typography>
                            <Typography variant="inherit">
                                طراحی اختصاصی و نوین سایت
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} lg={6} className={'intro-item'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-universal-access" viewBox="0 0 16 16">
                                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z" />
                            </svg>
                        </Box>
                        <div>
                            <Typography variant="h6">
                                طراحی سایت
                            </Typography>
                            <Typography variant="inherit">
                                طراحی اختصاصی و نوین سایت
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} lg={6} className={'intro-item'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-stack" viewBox="0 0 16 16">
                                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
                                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
                            </svg>
                        </Box>
                        <div>
                            <Typography variant="h6">
                                طراحی سایت
                            </Typography>
                            <Typography variant="inherit">
                                طراحی اختصاصی و نوین سایت
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} lg={6} className={'intro-item'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                            </svg>
                        </Box>
                        <div>
                            <Typography variant="h6">
                                طراحی سایت
                            </Typography>
                            <Typography variant="inherit">
                                طراحی اختصاصی و نوین سایت
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} lg={6} mb={{ lg: '0 !important' }} className={'intro-item'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bank" viewBox="0 0 16 16">
                                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                            </svg>
                        </Box>
                        <div>
                            <Typography variant="h6">
                                طراحی سایت
                            </Typography>
                            <Typography variant="inherit">
                                طراحی اختصاصی و نوین سایت
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} sm={6} lg={6} sx={{ marginBottom: '0 !important' }} mb={20} className={'intro-item'}>
                        <Box component={'span'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                            </svg>
                        </Box>
                        <div>
                            <Typography variant="h6">
                                طراحی سایت
                            </Typography>
                            <Typography variant="inherit">
                                طراحی اختصاصی و نوین سایت
                            </Typography>
                        </div>
                    </Grid>
                </MyGrid>
            </MyContainer>
        </Box>
    )
}