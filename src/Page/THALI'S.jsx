import { MainData } from "../Data/Data";
import Nav from "../Component/Nav";
import Contact from "../Component/Contact";
import AfterHero from "../Component/AfterHero";
import SubItem from "../Component/SubItem";

const THALI = () => {
  const updateitems = MainData.filter((curElem) => {
    return curElem.categories === "THALI'S";
  });
  return (
    <>
      <Nav />
      <AfterHero />
      <div className="container">
        <div className="row">
          <SubItem item={updateitems} />
        </div>
      </div>
      <Contact />
    </>
  );
};

export default THALI;
