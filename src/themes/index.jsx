"use client"

import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { cacheRtl } from './catchRtl';
import { MyTheme } from './MyTheme';


export default function MainTheme({ children }) {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={MyTheme}>
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}



