import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./ExpenseList.css";
import { toast, ToastContainer } from "react-toastify";
const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filterList = list.filter((item) => item.title.includes(query));
  const notifySuccess = () => toast.success("Expense Deleted");
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filterList.length ? (
        filterList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <h3>Uh Oh! Your Expense list is Empty</h3>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
