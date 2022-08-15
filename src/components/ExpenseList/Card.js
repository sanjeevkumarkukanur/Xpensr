import moment from "moment";
import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteExpense } from "../../redux/action/expenses";
const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  };
  return (
    <div className="card" style={{ borderRight: "6px solid #fff" }}>
      <div className="image-card-container">
        <img src="" alt="" />
      </div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹ {item.amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <DeleteForeverIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;
