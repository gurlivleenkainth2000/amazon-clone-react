// http://pngimg.com/uploads/amazon/amazon_PNG25.png
import React from 'react';
import './../assets/Home.css';
import Product from './../components/Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product
                    id={1}
                    title='Redmi Earbuds S (with Gaming Mode), Up to 12 Hours of Playback time, IPX4 Sweat & Splash Proof, DSP ENC for Calls'
                    price={1799}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61k1jK9XwVL._AC_UY218_.jpg"
                />
                <Product
                    id={2}
                    title='All-new Echo Dot (4th Gen) | Next generation smart speaker with powerful bass and Alexa (Black)'
                    price={4999}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/61KIy6gX-CL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id={3}
                    title='HP 410 All-in-One Wireless Ink Tank Color Printer with Voice-Activated Printing(Works with Alexa and Google Voice- Assistant)'
                    price={14499}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31LDF8ccgJL._AC_US160_FMwebp_QL70_.jpg"
                />
                <Product
                    id={4}
                    title='Preethi Zodiac MG 218 Mixer Grinder, 750W, 5 Jars (Black/ Light Grey)'
                    price={7699}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61YhX32D1uL._SY450_.jpg"
                />
                <Product
                    id={5}
                    title='Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)'
                    price={9749}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id={6}
                    title='Samsung 163 cm (65 Inches) Wondertainment Series Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray) (2020 model)'
                    price={94990}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81644xBqdyL._AC_UY218_.jpg"
                />
            </div>

        </div>
    );
}

export default Home;

// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
// https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/GW_Hero/Main_Desktop_1500x600_DS._CB404300086_.jpg
