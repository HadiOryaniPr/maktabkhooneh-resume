import React from "react";
import Introduction from "./components/introduction.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillSection from "./components/SkillSection.jsx";
import CenterArrow from "./components/centerArrow.jsx";


const App = () => {
  return(
    <div>
  <Introduction />
  <CenterArrow secId="about" />
  <AboutSection />
  <CenterArrow secId="portfolio" />
  <SkillSection />
</div>
  )
}

export default App;