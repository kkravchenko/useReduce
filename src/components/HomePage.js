'use client'
import { useReducer } from 'react'

const reducer = (state, action) => {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1,
    }
  }
  if (action.type === 'decrement_age') {
    return {
      age: state.age === 1 ? 1 : state.age - 1,
    }
  }
}

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, { age: 42 })

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'incremented_age' })
        }}
      >
        Increment age
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement_age' })
        }}
      >
        Decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  )
}

export default HomePage
