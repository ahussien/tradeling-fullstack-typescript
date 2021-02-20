import React from "react";
import styled from "styled-components";

export interface RepositoryCard {
  full_name: string
  description: string
  name: string
  language: string
  forks_count: number
  stargazers_count: number
  url: string
  html_url: string
  open_issues_count: number
  owner: {
    avatar_url: string
  }
  id: number
}


const RepoCard :React.FC<{ repoCard: RepositoryCard }> = ({ repoCard }) => {
  return (
    <Container>
      <a href={repoCard.html_url}>
        <Image src={repoCard.owner.avatar_url} />
      </a>
      <CardBody>
        <Title>{repoCard.name}</Title>
        <Description>{repoCard.description}</Description>
      </CardBody>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  flex-basis: 25%;
  margin: 15px;
  border: solid 1px lightgray;
  text-align: center;
  @media (max-width: 768px) {
    & {
      flex: 1;
      flex-basis: 40%;
    }
  }
`;

const CardBody = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 12px;
  text-align: center;
`;

const Image = styled.img`
  width: 30%;
`;

export default RepoCard;
