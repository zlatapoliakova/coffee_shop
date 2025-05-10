import coffeeBeans from './coffee-beans.svg';
import coffeeBeansFill from './coffee-beans-fill.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
                <ul className="footer_list">
                    <li className="footer_list_link">
                        <img src={coffeeBeans} alt="Coffee beans" />
                        <a href="/">Coffee house</a>
                    </li>
                    <li className="footer_list_link"><a href="/">Our coffee</a></li>
                    <li className="footer_list_link"><a href="/">For your pleasure</a></li>
                </ul>
                 <div className="footer_divider">
                    <div className='footer_divider_line'></div>
                    <img src={coffeeBeansFill} alt="Coffee beans" />
                    <div className='footer_divider_line'></div>
                </div>
        </footer>
    );
}

export default Footer;