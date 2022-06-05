import { title } from "process"
import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = () => {
    // Using individual state slices
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    // // Using one state object for all slices
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // })
    
    const titleChangeHandler = (event) => {        
        console.log("e.title:", event.target.value)
        setEnteredTitle(event.target.value)
                
        // // If you're going to use one state object, this is the correct format.
        // // Use prevState as a function argument, to make sure you're receiving the correct and most recent value of state.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    }

    const amountChangeHandler = (event) => {    
        console.log("e.amt:", event.target.value)    
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        console.log("e.date:", event.target.value)
        setEnteredDate(event.target.value)
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
