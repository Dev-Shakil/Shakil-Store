
import React, { useContext } from 'react';

import { FilterContext } from '../Context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProdeuctList = () => {
const {filter_products, grid_view} = useContext(FilterContext);


  if(grid_view===true){
    return <GridView product={filter_products}/>
  };
  if(grid_view===false){
    return <ListView product={filter_products}/>
  }


};


export default ProdeuctList
