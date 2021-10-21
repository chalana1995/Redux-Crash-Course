import React, { useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import { setUser } from "./actions";
import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUser } from "./selectors";
import { useSelector } from "react-redux";
import styled from "styled-components";

const selectUser = createSelector(makeSelectUser, (user) => ({
  user,
}));

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

const UserPage = () => {
  const { userId } = useParams();
  const { user } = useSelector(selectUser);
  const { setUser } = actionDispatch(useDispatch());

  const getUser = async (id) => {
    const response = await Axios(`https://reqres.in/api/users/${id}`).catch(
      (err) => {
        console.log(err);
      }
    );

    console.log("User", response.data.data);

    if (response) {
      setUser(response.data.data);
    }
  };

  useEffect(() => {
    if (userId && userId !== "") {
      getUser(userId);
    }
  }, [userId]);

  if (!user) {
    return <div>Loading ....</div>;
  }

  return (
    <UserContainer>
      <UserWrapper>
        <UserImage>
          <img src={user.avatar} />
        </UserImage>
        <UserName>
          {user.first_name} {user.last_name}
        </UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserWrapper>
    </UserContainer>
  );
};

export default UserPage;

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: black;
  margin: 0;
`;

const UserEmail = styled.h3`
  font-size: 18px;
  color: #353535;
  margin: 0;
`;
