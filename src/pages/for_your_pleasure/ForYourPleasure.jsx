import AboutBlock from "../../components/about_block/AboutBlock";
import Header from "../../components/header/Header";

import bg from '../../resources/img/coffee-pleasure-bg.jpg';
import aboutImg from './about-coffee-pleasure.jpg';

const ForYourPleasure = () => {
    return (
        <>
            <Header titleName="Our Coffee" urlBg={bg} />
            <AboutBlock image={aboutImg} title="About our goods" descr="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.[[br]]Afraid at highly months do things on at. Situation recommend objection do intention so questions.[[br]]As greatly removed calling pleased improve an. Last ask him cold feel[[br]]met spot shy want. Children me laughing we prospect answered followed. At it went[[br]] is song that held help face." />
        </>
    );
}

export default ForYourPleasure;