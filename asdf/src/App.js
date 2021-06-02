import React, { useState, useRef, useReducer } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: false,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: true,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "TOGGLE":
      const {id} = state;
      return {
        ...state,
        users: users.
      }
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };

  const onCreate = () => {
    const {
      inputs: { username, email },
    } = state;
    dispatch({
      type: "CREATE_USER",
      user: { username, email },
    });
  };

  const onRemove = () => {};

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={() => {}} onToggle={() => {}} />
    </>
  );
};

export default App;
