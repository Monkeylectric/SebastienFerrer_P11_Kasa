import './Title.css';

function Title(props) {
    return (
        <div className="title_container">
            <div className="title">{ props.title }</div>
            <div className="location">{ props.location }</div>
        </div>
    )
}

export default Title;