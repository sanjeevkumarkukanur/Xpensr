import React, { useState } from "react";
import "./SubHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../redux/action/expenses";
const SubHeader = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="subHeader-container">
      {window.location.pathname === "/" ? (
        <div className="subHeader-home">
          <div className="subHeader-search">
            <SearchIcon />
            <input
              value={input}
              placeholder="Search expenses"
              onChange={handleInput}
            />
          </div>
          <Link to="add-expense">
            <div className="add-button">
              <AddCircleOutlineIcon />
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="subHeader-add">
          <Link to="/">
            <div className="subHeader-back">
              <ArrowBackIosIcon />
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="close-button">
              <CloseIcon />
              <label>Close</label>
            </div>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
