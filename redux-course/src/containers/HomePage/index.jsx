import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selector";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const HomePage = () => {
  const { users } = useSelector(stateSelector);
  console.log("=====users====", users);

  return <div>Home Page</div>;
};

export default HomePage;
