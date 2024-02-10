import MyNav from "../Nav";
import Banner from "../banner";
import CardSection from "../card";
import Comment from "../comment";
import Contact from "../contact";
import Faq from "../faq";
import Footer from "../footer";
import Header from "../header";
import Intro from "../intro";
import Products from "../products";
import Steps from "../steps";


export default function Homepage() {
    return (
        <>
            <Header />
            <Intro />
            <Steps />
            <Products />
            <Comment />
            <CardSection />
            <Contact />
            <Banner />
            <Faq />
            <Footer />

            <MyNav />
        </>
    )
}