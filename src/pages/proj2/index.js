import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/proj2hero.png"; 
import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import List from "../../components/list/list"
import ListQuotes from "../../components/listQuotes/listQuotes"
import Paragraph from "../../components/paragraph/paragraph"
import Phase from "../../components/phase/phase"
import ImgRight from "../../components/imgRight/imgRight"
import ImgLeft from "../../components/imgLeft/imgLeft"
import ImgFull from "../../components/imgFull/imgFull"
import HowMightWe from "../../components/howMightWe/howMightWe"
import Issue from "../../components/issue/issue"
import More from "../../components/more/more"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"
import { Constants } from "../../constants"


class Index extends React.Component {
  render() {
    return ( // TODO: change class name below
      <div className="proj2">
        <SEO title="Proj2" description="This is the description of project 2."/>
        <div className="hero__wrapper">
          <Header/>
          <InnerHero img={Hero}/>
          <InnerTxt heroCategory={Constants.proj2.heroCategory}
                    heroYear={Constants.proj2.heroYear}
                    heroDeliverable={Constants.proj2.heroDeliverable}
                    heroTitle={Constants.proj2.heroTitle}
                    heroSummary="This is the summary of project 2. "
                    />
        </div>     
        <Abstract
                  abstractTeam="Isabella M."
                  abstractRole="UI Designer · Developer" 
                  abstractTools="Sketch API · JS · Objective C" 
                  abstractTime="3 months · December 2019" 
                  abstractBody="Proj2 abstract body."
                  liveLink="https://cluse.cc"
                  gitLink="https://github.com/ygev/cluse"/> 
        <div id="p1">
          
          <Phase phaseTitle="Project 1 Inspiration and Description"/>
          <Paragraph paragraphTitle="Inspiration?" 
                    paragraphBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          <Paragraph paragraphTitle="Description" 
                    paragraphBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
        </div>
        <More/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

export default Index

