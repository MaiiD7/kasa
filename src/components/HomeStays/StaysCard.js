import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  width: 335px;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  background-position: cover;
  background-position: center;
`

const CardTitle = styled.p`
  bottom: 0;
  left: 20;
  text-align: left;
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-shadow: -1px -1px 1px rgba(0,0,0,0.7);
`

const StayCard = (props) => {

  const {stay} = props

  
  return (
      <Card style={{backgroundImage: `url(${stay.cover})`, position: 'relative'}}>
        <CardTitle style={{position: 'absolute'}}>{stay.title}</CardTitle>
      </Card>
  )
}

export default StayCard