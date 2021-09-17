import React from 'react';
import { faqContents } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.heroTitle} imageSource={faqContents.image} />
    <h2>{faqContents.title}</h2>
    <p>{faqContents.description}</p>
  </Container>
);

export default FAQ;