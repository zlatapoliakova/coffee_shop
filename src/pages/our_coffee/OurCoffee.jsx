import Header from "../../components/header/Header";
import AboutBlock from "../../components/about_block/AboutBlock";

import bg from '../../resources/img/coffee-shop-bg.jpg';
import aboutImage from './about-our-coffee.jpg';

const OurCoffee = () => {
    return (
        <>
            <Header titleName="Our Coffee" urlBg={bg} />
            <AboutBlock image={aboutImage} 
                title="About our beans" 
                descr="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.[[br]] Afraid at highly months do things on at. Situation recommend objection do intention so questions.[[br]]As greatly removed calling pleased improve an.[[br]] Last ask him cold feel[[br]] met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face." />
        </>
    );
}

export default OurCoffee;