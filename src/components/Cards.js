import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Lorem Impus Lorem Impus Lorem Impus'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Lorem Impus Lorem Impus Lorem Impus'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lorem Impus Lorem Impus Lorem Impus'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lorem Impus Lorem Impus Lorem Impus'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lorem Impus Lorem Impus Lorem Impus'
              label='Adrenaline'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;