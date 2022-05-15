// src/App.js

import * as React from "react"

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List list={stories} />

    </div>
  )
}


const Search = () => {
  // useState function takes an initial state as an argument.
  // Providing this initial state (""), tells React it will change.
  // Calling this function returns an array with two entries:
  //    1. searchTerm is the current state
  //    2. setSearchTerm is the function to update the state
  const [searchTerm, setSearchTerm] = React.useState("")
  // User types and the change event is captured by event handler.
  const handleChange = (event) => {
    // The handler uses the event's value and the state updater function to set the updated state.
    setSearchTerm(event.target.value)
  }
  // After the updated state is set in a component, the component renders again, meaning the component function runs again.
  // The updated state becomes the current state and is displayed in the components JSX.

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  )
}


const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
)


const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
)

export default App
