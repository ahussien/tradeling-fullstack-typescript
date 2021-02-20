import React, { Component } from "react";
import styled from "styled-components";

import UserCard , {User} from "./UserCard";

const UserCardList :React.FC<{ cardList: User[] }> = ({ cardList }) => {
  return (
    <Container>
      {cardList.map((item:any) => (
        <UserCard
          key={item.id}
         userCard={item}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default UserCardList;
