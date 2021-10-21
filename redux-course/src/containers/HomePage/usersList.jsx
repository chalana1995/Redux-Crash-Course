import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createSelector } from "reselect";
import styled from "styled-components";
import { makeSelectUsers } from "./selector";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const UsersList = () => {
  const { users } = useSelector(stateSelector);

  const isEmptyUsers = !users || (users && users.length === 0);

  const history = useHistory();

  const goToUserPage = (id) => {
    history.push(`/user/${id}`);
  };

  if (isEmptyUsers) return null;

  return (
    <UsersContainers>
      {users.map((user, idx) => (
        <UserWrapper key={idx} onClick={() => goToUserPage(user.id)}>
          <UserImage>
            <img src={user.avatar} />
          </UserImage>
          <UserName>
            {user.first_name} {user.last_name}
          </UserName>
        </UserWrapper>
      ))}
    </UsersContainers>
  );
};

export default UsersList;

const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
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
