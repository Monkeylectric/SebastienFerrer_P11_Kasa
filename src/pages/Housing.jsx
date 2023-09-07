import React from 'react';
import { useLoaderData } from "react-router-dom";
import './css/Housing.css';

import Header from "../components/Header/Header";
import Main from '../components/Main/Main';
import Slider from "../components/Slider/Slider";
import Title from "../components/Title/Title";
import Profile from "../components/Profile/Profile";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import Collapse from '../components/Collapse/Collapse';
import Footer from "../components/Footer/Footer";

// import housingServices from "../services/logement.service";

function Housing() {
    // const currentHouse = housingServices.getOneHousing(id);
    const currentHouse = useLoaderData();

    return (
        <React.Fragment>
            <Header />
            <Main>
                <Slider pictures={ currentHouse.pictures } />
                <div className="information_section">
                    <div className="title_section">
                        <Title title={ currentHouse.title } location={ currentHouse.location } />
                        <div className="tags_section">
                            { currentHouse.tags.map(tag => <Tag key={tag} tag={tag} />) }
                        </div>
                    </div>
                    <div className="subtitle_section">
                        <Profile name={ currentHouse.host.name } picture={ currentHouse.host.picture }/>
                        <Rating rating={ currentHouse.rating } />
                    </div>
                </div>
                <div className="information_dropdown_section">
                    <Collapse title="Description" description={ currentHouse.description } id="dropdown_housing" />
                    <Collapse title="Équipements" description={ currentHouse.equipments } id="dropdown_housing" />
                </div>
            </Main>
            <Footer />
        </React.Fragment>
    )
}

export default Housing;