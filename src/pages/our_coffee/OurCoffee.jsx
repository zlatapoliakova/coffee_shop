import Header from "../../components/header/Header";
import AboutBlock from "../../components/about_block/AboutBlock";

import bg from '../../resources/img/coffee-shop-bg.jpg';
import aboutImage from './about-our-coffee.jpg';
import SearchPanel from "../../components/searchPanel/SearchPanel";
import Filter from "../../components/filter/Filter";

import './ourCoffee.scss';
import CoffeeItem from "../../components/coffee_item/CoffeeItem";
import Footer from "../../components/footer/Footer";

const OurCoffee = () => {
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
            <AboutBlock image={aboutImage} 
                title="About our beans" 
                descr="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.[[br]] Afraid at highly months do things on at. Situation recommend objection do intention so questions.[[br]]As greatly removed calling pleased improve an.[[br]] Last ask him cold feel[[br]] met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face." />
            <div className="find-block">
                <SearchPanel text="Lookiing for" placeholder="start typing here..." />
                <Filter text="Or filter" /> 
            </div>
            <div className="coffee-items">
                {
                    dataCoffeeItems.map((item, i) => {
                        return <CoffeeItem key={i} title={item.title} country={item.country} price={item.price} />
                    })
                }
            </div>
            <Footer/>
        </>
    );
}

export default OurCoffee;