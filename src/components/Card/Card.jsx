import './Card.css';
import { Link } from "react-router-dom";

function Card(props) {
    const housingLink = `./housing/${props.id}`;
    const cardBackground = {
        "backgroundImage": `url(${props.cover})`
    }

    return (
        <Link to={ housingLink } className="card_link">
            <div className="card" style={ cardBackground }>
                <p className="card_title">{ props.title }</p>
            </div>
        </Link>
    )
}

export default Card;