import { MainData } from "../Data/Data";
import Nav from "../Component/Nav";
import Contact from "../Component/Contact";
import AfterHero from "../Component/AfterHero";
import SubItem from "../Component/SubItem";

const KATIROLLS = () => {
    const updateitems = MainData.filter((curElem) => {
      return curElem.categories === "KATI ROLLS";
    });
    
    return (
      <>
        <Nav />
        <AfterHero />
        <div className="container">
          <div className="row">
              <SubItem item={updateitems}/>
          </div>
        </div>
        <Contact />
      </>
    );
}

export default KATIROLLS
