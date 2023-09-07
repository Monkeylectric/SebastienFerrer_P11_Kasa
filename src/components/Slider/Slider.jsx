import { useState } from 'react';
import './Slider.css';

function Slider(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = props.pictures;

    const goToPrevious = () => {
        const isFirstIndex = currentIndex === 0;
        const newIndex = isFirstIndex ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastIndex = currentIndex === pictures.length - 1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <section className="slider_section">
            <div className="slider_container">
                { pictures.length > 1 ? <div className="slider_left_arrow" onClick={ goToPrevious }><i className="fa-solid fa-chevron-left"></i></div> : "" }
                { pictures.length > 1 ? <div className="slider_right_arrow" onClick={ goToNext }><i className="fa-solid fa-chevron-right"></i></div> : "" }
                <img src={ pictures[currentIndex] } alt="cover" className="slider_img" />
            </div>
        </section>
    )
}

export default Slider;