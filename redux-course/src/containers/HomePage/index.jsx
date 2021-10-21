import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selector";
import Axios from "axios";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const HomePage = () => {
  const { users } = useSelector(stateSelector);

  const fetchUsers = async () => {
    const response = await Axios.get("https://reqres.in/api/users").catch(
      (err) => console.log(err)
    );

    console.log(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>Home Page</div>;
};

export default HomePage;
