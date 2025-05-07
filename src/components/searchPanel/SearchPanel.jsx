import './searchPanel.scss';

const SearchPanel = ({text, placeholder}) => {
    return (
        <div className="search">
            <div className="search_text">{text}</div>
            <input className="search_input" type="text" placeholder={placeholder}/>
        </div>
    );
}

export default SearchPanel;