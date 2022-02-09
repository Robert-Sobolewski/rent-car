import React from 'react';

export const Filter = (props) => {

  const filterData = (e) => {
    props.setCurrentItem(e.target.value);    
    
  };
     
   
  return <div>
       <select
            className="book-mark-select"
            value={props.currentItem}
            onChange={filterData}
          >
            {props.category?.map((item, idx) => {
              return (
                <option key={idx} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
  </div>;
};
