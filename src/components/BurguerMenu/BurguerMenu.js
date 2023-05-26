import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default function BurguerMenu ({routes, setCategory, category}) {
  console.log('category', category)
  return (
    <Menu>
      {routes && routes.map((route, index) => (
        <div 
          key={index} 
          onClick={() => setCategory(index)} 
          className={category === index ? "item-selected paddingVertical" : "paddingVertical"}>
          {route}
        </div>
      ))}
    </Menu>
  );
};
