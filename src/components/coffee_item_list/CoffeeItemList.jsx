import CoffeeItem from "../coffee_item/CoffeeItem";

const CoffeeItemList = ({data}) => {
    return (
        <div className="coffee-items">
            {
                data.map((item, i) => {
                    return <CoffeeItem key={i} title={item.title} country={item.country} price={item.price} />
                })
            }
        </div>
    );
}

export default CoffeeItemList;