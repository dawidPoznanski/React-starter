import React from 'react';
import { infoContents } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.heroTitle} imageSource={infoContents.image} />
    <h2>{infoContents.title}</h2>
    <p>{infoContents.description}</p>
  </Container>
);

export default Info;