import React from "react";
import "./homeHero.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Fade from 'react-reveal/Fade';
import Marquee from 'react-double-marquee';
import { Constants } from "../../constants"
import defaultHero from "../../images/hero.gif"
import proj1Hero from "../../pages/proj1/images/proj1hero.png"; 
import proj2Hero from "../../pages/proj2/images/proj2hero.png"; 
import proj3Hero from "../../pages/proj3/images/proj3hero.png"; 

var images = {
    default: defaultHero,
    proj1: proj1Hero,
    proj2: proj2Hero,
    proj3: proj3Hero,
}

export default props => (
    <>
        <Fade duration={500}>
            <section className={"home__hero " + props.currentHover}>
                <figure className="home__img"> 
                    <img className="home__img--limiter" src={images[props.currentHover]}/>
                </figure>
            </section>
        </Fade>
    </>
);  