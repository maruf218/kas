import { MainData } from "../Data/Data";
import { Link, useNavigate } from "react-router-dom";
import SearchM from "./SearchM";

const AfterHero = () => {
  let pathName = window.location.pathname;

  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/${e.target.value}`);
  };

  const optMenu = [...new Set(MainData.map((item) => item.categories))];

  const optFil = (i) => {
    let arr = i.split(" ");
    return arr.join("%20");
  };
  const ForCatHead = () => {
    return pathName.split("%20").join(" ").split("/");
  };

  return (
    <>
      <div className="container my-3 py-1 sticky-top bg-white">
        <div className="row ">
          <div className="col-12">
            <div className="cat-menu d-flex justify-content-between ">
              {pathName === "/" ? (
                ""
              ) : (
                <Link
                  className="onlineOrBtn text-decoration-none fw-bold text-dark d-flex align-items-center"
                  to="/"
                >
                  {" "}
                  <i className="bi bi-chevron-left"></i>{" "}
                  <span className="d-none d-md-inline">Order Online</span>
                </Link>
              )}
              <button
                className="btn butnSearch"
                data-bs-toggle="modal"
                data-bs-target="#AfterHero"
              >
                <i className="bi bi-search"></i>
              </button>
              <SearchM target="AfterHero" />
              <select
                className="form-select select-opt"
                aria-label="Default select example"
                onChange={handleClick}
              >
                {optMenu.map((itm, index) => (
                  <option
                    key={index}
                    value={itm}
                    selected={`/${optFil(itm)}` === pathName ? "selected" : ""}
                  >
                    {itm}
                  </option>
                ))}
                <option
                  value="Items"
                  selected={"/Items" === pathName ? "selected" : ""}
                >
                  Items
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="h3 fw-bolder mt-4 mt-md-0">{ForCatHead()}</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AfterHero;
