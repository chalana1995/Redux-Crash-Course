import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selector";
import Axios from "axios";
import { setUsers } from "./actions";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const actionDispatche = (dispatch) => ({
  setUsers: (users) => dispatch(setUsers(users)),
});

const HomePage = () => {
  const { users } = useSelector(stateSelector);
  const { setUsers } = actionDispatche(useDispatch());

  const fetchUsers = async () => {
    const response = await Axios.get("https://reqres.in/api/users").catch(
      (err) => console.log(err)
    );
    setUsers(response.data.data);
  };

  console.log("===users===", users);

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>Home Page</div>;
};

export default HomePage;
