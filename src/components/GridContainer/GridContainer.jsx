import './GridContainer.css';

function GridContainer({children}) {
    return (
        <section className="cards_section">
            <div className='cards_container'>
                { children }
            </div>
        </section>
    )
}

export default GridContainer;