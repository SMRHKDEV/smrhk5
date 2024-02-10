import { createTheme } from '@mui/material/styles';

import NextLink from '@/helper/NextLink';


export const MyTheme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'sans',
        h4: {
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '20px'
        }
    },

    components: {
        MuiLink: {
            defaultProps: {
                component: NextLink
            }
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: NextLink
            }
        }
    }

});