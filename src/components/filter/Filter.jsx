import './filter.scss';

const Filter = ({text}) => {
    const dataFilterBtn = [
        {name: 'Brazil'},
        {name: 'Kenya'},
        {name: 'Columbia'}
    ];

    return (
        <div className="filter">
            <div className="filter_text">{text}</div>
            <div className="filter_btns">
                {
                    dataFilterBtn.map((btn, i) => {
                        return <button className="filter_btns_btn" key={i}>{btn.name}</button>
                    })
                }
            </div>
        </div>
    );
}

export default Filter;