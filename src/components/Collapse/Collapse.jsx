import { useState } from 'react';
import './Collapse.css';

function Collapse(props) {
    const [actived, setActived] = useState(false);

    const handleClick = () => {
        !actived ? setActived(true) : setActived(false);
    }

    // Array.isArray(props.description) ? console.log(props.description) : console.log("null");

    let descriptionIsArray = false;
    if (Array.isArray(props.description)) descriptionIsArray = true;

    return (
        <div className="dropdown_container" data-active={ actived ? "active" : "null" } id={ props.id }>
            <div className="dropdown_title" onClick={ handleClick }>
                <span className="dropdown_title_text">{ props.title }</span>
                <div className="dropdown_title_icone"><i className="icon fa-solid fa-chevron-down"></i></div>
            </div>
            <p className="dropdown_description">{ descriptionIsArray ? props.description.map(element => <span key={element}>{element}</span>) : props.description }</p>
        </div>
    )
}

export default Collapse;