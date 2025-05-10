import coffeeBeans from './coffee-beans.svg';

import './aboutBlock.scss';

const AboutBlock = ({image, title, descr}) => {
    const parts = descr.split('[[br]]');
    
    return(
        <div className="container">
            <div className="about">
                <img src={image} alt="Girl drink coffee" className="about_img" />
                <div className="about_text">
                    <h2 className="about_titel">{title}</h2>
                    <div className="about_text_divider">
                        <div className='about_text_divider_line'></div>
                        <img src={coffeeBeans} alt="Coffee beans" />
                        <div className='about_text_divider_line'></div>
                    </div>
                    <div className="about_text_descr">
                        {
                            parts.map((part, i) => (
                                <p key={i} className="distance-line">
                                    {part.trim()}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="low-line"></div>
        </div>
    );
}

export default AboutBlock;