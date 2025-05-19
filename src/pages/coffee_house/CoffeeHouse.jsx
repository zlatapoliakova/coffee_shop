import { bestCoffee } from "../../bd/data";

import Header from "../../components/header/Header";
import AboutBlock from "../../components/about_block/AboutBlock";

import coffeeBeans from "../coffee_house/coffee-beans-white.svg";
import headerBg from "../coffee_house/header-bg.jpg";

import './coffeeHouse.scss';
import CoffeeItemList from "../../components/coffee_item_list/CoffeeItemList";

const CoffeeHouse = () => {
    return (
        <>
            <Header 
                className="header" 
                urlBg={headerBg} 
                titleName={"Everything You Love About Coffee"}>
                <div className="header_divider">
                    <div className="header_divider_line"></div>
                    <img src={coffeeBeans} alt="Coffee beans" />
                    <div className="header_divider_line"></div>
                </div>
                <h2 className="header_subtitle">We makes every day full of energy and taste <br/> Want to try our beans?</h2>
                <button className="btn">More</button>
            </Header>
            <AboutBlock 
                title="About Us" 
                descr="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.[[br]]Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now."
                lowLine={false} />
            <div className="best-coffee">
                <h2 className="title">Our best</h2>
                <CoffeeItemList data={bestCoffee}/>
            </div>
        </>
    );
}

export default CoffeeHouse;