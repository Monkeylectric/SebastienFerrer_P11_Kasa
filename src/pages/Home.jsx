import React, { useState, useEffect } from 'react';
import './css/Home.css';

import Header from "../components/Header/Header";
import Main from '../components/Main/Main';
import Banner from "../components/Banner/Banner";
import GridContainer from '../components/GridContainer/GridContainer';
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";

import bannerImage from "../images/home_banner.png";
import housingServices from "../services/logement.service";

function Home() {
    const [housingData, setHousingData] = useState([]);

    useEffect(() => {
        const data = housingServices.getAllHousing();
        setHousingData(data);
        // sessionStorage.setItem("housingData", JSON.stringify(data));
    }, [])

    return (
        <React.Fragment>
            <Header />
            <Main>
                <Banner src={ bannerImage } text="Chez vous, partout et ailleurs" />
                <GridContainer>
                    { housingData.map(house => <Card key={house.id} cover={house.cover} title={house.title} id={house.id} />) }
                </GridContainer>
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default Home;