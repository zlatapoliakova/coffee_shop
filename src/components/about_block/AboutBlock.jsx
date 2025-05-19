import coffeeBeans from './coffee-beans.svg';

import './aboutBlock.scss';
import '../../css/general-style.css';

const AboutBlock = ({image, title, descr, lowLine=true}) => {
    const parts = descr.split('[[br]]');
    
    return(
        <>
            <div className="about" >
                <img 
                    src={image} 
                    alt="Girl drink coffee" 
                    className="about_img" 
                    style={{'display': image ? 'block' : 'none'}}/>
                <div 
                    className="about_text" 
                    style={{'maxWidth': image ? '346px' : '590px'}}>
                    <h2 className="title">{title}</h2>
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
            {
                lowLine ? <div className="low-line"></div> : null
            }
        </>
    );
}

export default AboutBlock;