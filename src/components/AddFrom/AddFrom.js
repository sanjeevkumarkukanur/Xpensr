import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useState } from "react";
import "./AddFrom.css";
import "react-toastify/dist/ReactToastify.css";
import { categories } from "../../constants/constants";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { useDispatch } from "react-redux";
import { AddExpense } from "../../redux/action/expenses";
import { toast, ToastContainer } from "react-toastify";
import SuccessModal from "./SuccessModal";
const AddFrom = () => {
  const cat = categories;

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (e) => {
    setCategory(e);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please Enter valid data!");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(AddExpense(data));
    setModalOpen(true);
  };

  return (
    <div className="add-from-container">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="from-item">
        <label>Title</label>
        <input
          placeholder="Give a Name to yor expenditure"
          className="titlename"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="from-item">
        <label>Amount ₹</label>
        <input
          value={amount}
          className="amountname"
          placeholder="enter the Amount"
          onChange={handleAmount}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <KeyboardArrowDownIcon />
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => {
                return (
                  <div
                    className="category-items"
                    style={{
                      borderRight: `5px solid ${category.color}`,
                    }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="from-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <FlightTakeoffIcon />
        </div>
      </div>
    </div>
  );
};

export default AddFrom;
