import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>
        {Intl.NumberFormat('USD', {
          style: 'currency',
          currency: 'USD'
        }).format(price)}
      </span>
    </div>
  </div>
);

export default CollectionItem;
