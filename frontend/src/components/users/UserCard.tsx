import React, { Component } from 'react'
import styled from 'styled-components'

export interface User {
  avatar_url: string
  login: string
  name: string
  location: string
  bio: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  twitter_username: string
  description: string
  id: number
}

const UserCard :React.FC<{ userCard: User }> = ({ userCard }) => {
    return (
      <Container>
      <a href={userCard.html_url}>
        <Image src={userCard.avatar_url} />
      </a>
      <CardBody>
        <Title>{userCard.name}</Title>
        <Description>{userCard.description}</Description>
      </CardBody>
    </Container>
    )
  
}

const Container = styled.div`
  flex: 1;
  flex-basis: 15%;
  margin: 15px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
`

const CardBody = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
`

const Description = styled.p`
  font-size: 12px;
  text-align: center;
`

const Image = styled.img`
  width: 100%;
`

export default UserCard