import { Box } from '@mui/material';
import HeaderTxt from './HeaderTxt';
import HeaderPic from './HeaderPic';
import MyContainer from '@/helper/MyContainer';

import './index.scss';


export default function Header() {
    return (
        <Box component='section' className='main-header'>
            <MyContainer>
                <HeaderTxt />
                <HeaderPic />
            </MyContainer>
        </Box >
    )
}