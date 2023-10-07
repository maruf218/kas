import { useState } from "react";

const SubItem = ({ item }) => {
  return (
    <>
      {item.map((itm, index) => {
        const [count, setCount] = useState(1);
        const [price, setPrice] = useState(itm.price);

        return (
          <div key={index} className="col-sm-6 mb-3">
            <div
              className="subCard"
              data-bs-toggle="modal"
              data-bs-target={`#${itm.title.split(/[" "()&]/).join("")}`}
            >
              <div className="row">
                <div className="col-lg-8 order-sm-1 order-2">
                  <h6 className="fw-bold mt-3 mt-sm-0">{itm.title}</h6>
                  {itm.descri && <span>{itm.descri}</span>}
                  <p>
                    ${itm.price}
                    {itm.price1 && ` - $${itm.price1}`}
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end order-sm-2 order-1">
                  {itm.img && <img src={itm.img} alt="..." />}
                </div>
              </div>
            </div>
            {/* <!-- Modal --> */}
            <div
              className="modal fade subItmPop"
              id={`${itm.title.split(/[" "()&]/).join("")}`}
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable d-flex align-items-center">
                <div className="modal-content">
                  <div className="modal-body">
                    {itm.img && <img src={itm.img} alt="..." />}
                    <div className="popimgAfter mt-3 m-2">
                      <h4 className="fw-bolder">{itm.title}</h4>
                      {itm.descri && <span>{itm.descri}</span>}
                      <p className="fw-bold">${price}</p>
                      <button
                        className="btn"
                        onClick={() =>
                          count <= 1 ? setCount(1) : setCount(count - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-1">{count}</span>
                      <button
                        className="btn"
                        onClick={() => setCount(count + 1)}
                      >
                        {" "}
                        +{" "}
                      </button>
                      {itm.price1 && (
                        <select
                          onChange={(e) => setPrice(e.target.value)}
                          className="form-select mb-5 mt-2"
                          aria-label="Default select example"
                        >
                          <option disabled selected>
                            Select one
                          </option>
                          <option value={price}>Regular</option>
                          <option value={itm.price1}>{itm.exp}</option>
                        </select>
                      )}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="subpopFoot w-100 d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn sP-btnx"
                        data-bs-dismiss="modal"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                      <button className="btn sP-btnO">
                        Add To Order ${(price * count).toFixed(2)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SubItem;
