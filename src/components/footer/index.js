import MyContainer from '@/helper/MyContainer';
import SubFooter from './SubFooter';
import LinkList from './LinkList';
import RightSection from './RightSection';
import LeftSection from './LeftSection';

import './index.scss';


export default function Footer() {
    return (
        <footer>
            <MyContainer>
                <RightSection />
                <LinkList />
                <LeftSection />
                <SubFooter />
            </MyContainer>
        </footer>
    )
}