import React from 'react'
import { useState } from 'react';

const CategoryBtn = ({setCat, value}) => {
    const [active, setActive] = useState(false);
    console.log(active)
    const handleClick = () => {
      setActive(!active);
      setCat(value);
    };
  
    return (
      <div className="center">
        <button
          onClick={handleClick}
          className={active ? "gray_btn_active" : "gray_btn"}
        >
          {value}
        </button>
      </div>
    );
  }

export default CategoryBtn
