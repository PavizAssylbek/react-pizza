import React, { useState } from 'react';

function Categories({ items }) {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="categories">
      <ul>
        {items ? (
          items.map((text, id) => (
            <li
              className={isActive === id ? 'active' : ''}
              onClick={() => setIsActive(id)}
              key={`${text}_${id}`}>
              {text}
            </li>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </div>
  );
}

export default Categories;
