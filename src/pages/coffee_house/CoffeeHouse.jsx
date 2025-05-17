import Header from "../../components/header/Header";

import coffeeBeans from "../coffee_house/coffee-beans-white.svg";
import headerBg from "../coffee_house/header-bg.jpg";

import './coffeeHouse.scss';

const CoffeeHouse = () => {
    return (
        <>
            <Header className="header" urlBg={headerBg} titleName={"Everything You Love About Coffee"}>
                <div className="header_divider">
                    <div className="header_divider_line"></div>
                    <img src={coffeeBeans} alt="Coffee beans" />
                    <div className="header_divider_line"></div>
                </div>
                <h2 className="header_subtitle">We makes every day full of energy and taste <br/> Want to try our beans?</h2>
                <button className="btn">More</button>
            </Header>
        </>
    );
}

export default CoffeeHouse;