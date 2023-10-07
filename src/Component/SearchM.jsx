import { useState } from "react";

const SearchM = ({ target }) => {
  const [item, setItem] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`You Search ${item}`);
    }
  };
  return (
    <div
      className="modal fade"
      id={target}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body position-relative p-0">
            <input
              type="text"
              className="form-control py-2"
              placeholder="Search Anything"
              onKeyDown={(e) => handleKeyDown(e)}
              onChange={(e) => setItem(e.target.value)}
            />
            <button
              type="button"
              className="btn SerachCross position-absolute"
              data-bs-dismiss="modal"
              style={{ top: "0", right: "0", color: "#269745" }}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchM;
