import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';

let TitleHeader = () =>
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>Table Talk Tutor</Title>
        <Subtitle>Subtitle</Subtitle>
      </Body>
      <Right />
    </Header>
  </Container>

export default TitleHeader;