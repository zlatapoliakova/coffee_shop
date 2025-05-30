import coffeeBeans from './coffee-beans.svg';

import './header.scss';

const Header = (props) => {
    return (
        <header 
            className='header'
            style={{background: `url('${props.urlBg}') lightgray 50% / cover no-repeat`}} >
            <div className="container">
                <nav className="nav">
                    <ul className="menu_list">
                        <li className="menu_list_link">
                            <img src={coffeeBeans} alt="Coffee beans" />
                            <a href="/">Coffee house</a>
                        </li>
                        <li className="menu_list_link"><a href="/">Our coffee</a></li>
                        <li className="menu_list_link"><a href="/">For your pleasure</a></li>
                    </ul>
                </nav>
                <h1 className="header_title">{props.titleName}</h1>
                {props.children}
            </div>
        </header>
    );
}

export default Header;