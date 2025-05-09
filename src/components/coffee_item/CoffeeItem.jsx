import defaultImg from './defaultImg.jpg';

import './coffeeItem.scss';

const CoffeeItem = ({image=`${defaultImg}`, title, country, price}) => {
    return(
        <div className="coffee-item">
            <img src={image} alt="Coffee item" className="coffee-item_img" />
            <h3 className="coffee-item_title">{title}</h3>
            <div className="coffee-item_country">{country}</div>
            <div className="coffee-item_price">{price}</div>
        </div>
    );
}

export default CoffeeItem;