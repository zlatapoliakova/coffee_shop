import AboutBlock from "../../components/about_block/AboutBlock";
import Header from "../../components/header/Header";
import CoffeeItem from "../../components/coffee_item/CoffeeItem";
import Footer from "../../components/footer/Footer";

import bg from '../../resources/img/coffee-pleasure-bg.jpg';
import aboutImg from './about-coffee-pleasure.jpg';

const ForYourPleasure = () => {
    const dataCoffeeItems = [
        {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$'},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
        {title: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
    ];

    return (
        <>
            <Header titleName="Our Coffee" urlBg={bg} />
            <AboutBlock image={aboutImg} title="About our goods" descr="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.[[br]]Afraid at highly months do things on at. Situation recommend objection do intention so questions.[[br]]As greatly removed calling pleased improve an. Last ask him cold feel[[br]]met spot shy want. Children me laughing we prospect answered followed. At it went[[br]] is song that held help face." />
            <div className="coffee-items">
                {
                    dataCoffeeItems.map((item, i) => {
                        return <CoffeeItem key={i} title={item.title} country={item.country} price={item.price} />
                    })
                }
            </div>
            <Footer />
        </>
    );
}

export default ForYourPleasure;