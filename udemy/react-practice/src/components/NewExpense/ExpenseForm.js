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
        // console.log("e.title:", event.target.value)
        setEnteredTitle(event.target.value)

        // // If you're going to use one state object, this is the correct format.
        // // Use prevState as a function argument, to make sure you're receiving the correct and most recent value of state.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    }

    const amountChangeHandler = (event) => {
        // console.log("e.amt:", event.target.value)
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        // console.log("e.date:", event.target.value)
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        // Stop the browser from reloading the page and automatically sending the form data when the submit button is clicked, before we can do anything with it.
        event.preventDefault()

        // Combinme all the form data into an object (unnecessary if you've been using the state object all along instead of using multiple pieces of state)
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        console.log("expenseData:", expenseData)

        // The advantage to individual pieces of state is that we can use two-way binding, not just listening to changes, but feeding the state back into the input via the form's value.
        // When the form is submitted, we'll call the set state function to reset it back to the initial state (empty string in this case).
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={enteredDate}
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
