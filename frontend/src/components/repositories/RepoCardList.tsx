import React from "react";
import styled from "styled-components";
import RepoCard, {RepositoryCard} from "./RepoCard";


const RepoCardList:React.FC<{ cardList: RepositoryCard[] }> = ({ cardList }) => {
  return (
    <Container>
      {cardList.map((item: any) => (
        <RepoCard repoCard= {item} key={item.id}/>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default RepoCardList;
