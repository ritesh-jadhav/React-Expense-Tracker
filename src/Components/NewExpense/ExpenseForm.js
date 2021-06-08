import React,{useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTile, setEnteredTile] = useState('');
  const [enetredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });
  const titleChangeHandler = (event) => {
    setEnteredTile(event.target.value);
    
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...userInput, enteredTitle: event.target.vlaue };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    
    // setUserInput((prevState) => {
    //   return { ...userInput, enteredAmount: event.target.vlaue };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTile,
      amount: +enetredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTile('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTile} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enetredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate}onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
