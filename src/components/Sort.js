import React, { useContext } from 'react';
import styled from 'styled-components';
import {BsFillGridFill, BsList } from "react-icons/bs"
import { FilterContext } from '../Context/filter_context';

const Sort = () => {
 const {filter_products, grid_view, setGridView , setListView , sorting} = useContext(FilterContext)
  return (
    <Wrapper>
      <div className="sorting-list--grid">
        <button className={grid_view ? "sort-btn active" : "sort-btn"} onClick={setGridView}>
          <BsFillGridFill className="icon"/>
        </button>
        <button className={grid_view ? "sort-btn" : "sort-btn active"} onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p>{`${filter_products.length} Products Avilable`}</p>
      </div>
      <div className="sort-selected">
        <form>
            <select className="select-items" id="sort" name="sort" onClick={sorting}>
              <option value="lowest" className="items" >Price(Lowest)</option>
              <option className="items" disabled></option>
              <option value="highest" className="items">Price(Highest)</option>
              <option className="items" disabled></option>
              <option value="a-z" className="items">Price(a to z)</option>
              <option className="items" disabled></option>
              <option value="z-a" className="items">Price(z to a)</option>
            </select>
        </form>
      </div>
    </Wrapper> 
  )
};
const Wrapper = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:1rem;
    .sorting-list--grid{
      
      display:flex;
      gap:2rem;
      .sort-btn{
        padding:.8rem 1rem;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:white;
        color:green;
        font-weight:bold;
        cursor:pointer;
        border:1px solid green;
        .icon{
          font-size:2rem;
          
         
        }
      }
      .active{
        color:white;
        background-color:green;
      }
    }
    .product-data p {
      font-size:1.7rem;
      font-weight:300;
      color:green;
    }
    .sort-selected form{
     .select-items{
      padding:.5rem;
     .items
  }

    }

`

export default Sort