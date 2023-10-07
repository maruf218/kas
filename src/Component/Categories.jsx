import { Link } from "react-router-dom";
import { MainData } from "../Data/Data";
import AfterHero from "./AfterHero";

const Categories = () => {
  const updateitems = MainData.filter((curElem) => {
    return curElem.categories === "Categories";
  });

  return (
    <>
      <AfterHero />
      
      <div className="container mt-4 mb-5">
        <div className="row">
          <h4 className="mb-4 fw-bold">Browse by category</h4>
          {updateitems.map((itm , index) => (
            <div key={index} className="col-lg-3 col-sm-6 col-md-4">
              <div className="CatCard">
                <Link to={itm.title}>
                  <img src={itm.img} alt="..." className="img-fluid" />
                  <p>{itm.title}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
