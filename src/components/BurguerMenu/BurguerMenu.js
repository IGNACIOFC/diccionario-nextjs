import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default function BurguerMenu ({routes, setCategory}) {

  return (
    <Menu>
      {routes && routes.map((route, index) => (
      <div key={index} onClick={() => setCategory(index)}>
        {route}
      </div>
      ))}
    </Menu>
  );
};