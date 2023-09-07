import './Rating.css';

function Rating(props) {
    const maxRating = 5;
    const rating = props.rating;
    let ratingArray = [];

    for(let i=1; i <= maxRating; i++) {
        if (i <= rating) {
            ratingArray.push(true);
        }else {
            ratingArray.push(false);
        }
    }

    return (
        <div className="rating_container">
            { ratingArray.map((rate, index) => rate ? <i key={index} className="fill fa-solid fa-star"></i> : <i key={index} className="empty fa-solid fa-star"></i>) }
        </div>
    )
}

export default Rating;