import React, { useState } from 'react';

function Categories({ items, onClick }) {
  const [isActive, setIsActive] = useState(0);

  const onSelectItem = (id) => {
    setIsActive(id);
    onClick(id);
  };

  return (
    <div className="categories">
      <ul>
        {items ? (
          items.map((text, id) => (
            <li
              className={isActive === id ? 'active' : ''}
              onClick={() => onSelectItem(id)}
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
