import './Banner.css';

function Banner(props) {
    return (
        <section className="banner_section">
            <div className="banner_container">
                <div className="banner_img_container">
                    <img src={ props.src } alt="banner" className="banner_img" />
                </div>
                { props.text ? <div className="banner_text">{ props.text }</div> : "" }
            </div>
        </section>
    )
}

export default Banner;