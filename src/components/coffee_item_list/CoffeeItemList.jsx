import CoffeeItem from "../coffee_item/CoffeeItem";
import {goods} from '../../bd/data';

const CoffeeItemList = () => {
    return (
        <div className="coffee-items">
            {
                goods.map((item, i) => {
                    return <CoffeeItem key={i} title={item.title} country={item.country} price={item.price} />
                })
            }
        </div>
    );
}

export default CoffeeItemList;