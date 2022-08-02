import React, { FC } from 'react';
/* import { useDispatch } from 'react-redux';
import { setCategory } from '../../store/slices/categorySlice'; */
import './Categories.sass';


export const categories = ['CITIES', 'HISTORY', 'CULTURE', 'SPORT', 'NEWS'];

const Categories:FC = () => {

 /*  const dispatch = useDispatch(); */

  return (
    <div className='categories'>
      <h2>ABOUT UKRAINE</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}/*  onClick={() => dispatch(setCategory(category))} */>{category}</li>
        ))}
       {/*  <li onClick={() => dispatch(setCategory('ALL'))}>ALL</li> */}
      </ul>
    </div>
  )
}

export default Categories;