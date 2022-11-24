import React, { useContext } from 'react'
import styled from "styled-components";
import { FilterContext } from '../Context/filter_context';
import {FaCheck} from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import{ Button} from "../styles/Button"


const FilterSection = () => {
  const {filters:{text,category,color,price,maxPrice,minPrice},all_products,UpdateFilterValue,clearFilters} = useContext(FilterContext);
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem)=>{
      return curElem[property]
    });
    if(property==="colors"){
      newVal = newVal.flat();
    }
    return(newVal = ["all", ...new Set(newVal)])
  }

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorOnlyData = getUniqueData(all_products, "colors");
  console.log(colorOnlyData)
  return (
    <Wrapper>
    <div className="filter-search">
      <from onSubmit={(e)=>e.preventDefault()}>
      <input type="text" name="text" value={text} onChange={UpdateFilterValue} placeholder="Search" />
      </from>
      
    </div>
    <div className="filter-category">
      <h3>Category</h3>
      <div>
        {
          categoryOnlyData.map((curElem,index)=>{
            return <button key={index} name="category" onClick={UpdateFilterValue} type="button" value={curElem} className={curElem === category ? "active" : ""}>
              {curElem}
            </button>
          })
        }
      </div>
    
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select name="company" id="company" className="filter-company--select" onClick={UpdateFilterValue}>
            {
              companyOnlyData.map((curCompany,index)=>{
                return <option name="company" value={curCompany} key={index}>{curCompany}</option>
              })
            }
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color--style">
          
          {
            
            colorOnlyData.map((curColor,index)=>{
              if(curColor==="all"){
                return <button className="color-all--style" name="color" value={curColor} key={index} type="button" onClick={UpdateFilterValue} >
                all
              </button>
              }
              return <button className="btnStyle" name="color" value={curColor} key={index} style={{backgroundColor:curColor}} type="button" onClick={UpdateFilterValue} >
                {color === curColor ? <FaCheck className="checkStyle"/> : null}
              </button>
            })
          }
        </div>
      </div>
      <div className="filter-price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price}/>
        </p>
        <input type="range" name="price" value={price} min={minPrice} max={maxPrice} onChange={UpdateFilterValue} />
      </div>
      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding:5rem 0;
  display:flex;
  flex-direction:column;
  gap:3rem;
  h3{
    padding:2rem 0;
    font-size:bold;
  }
  .filter-search{
    input{
      padding:0.6rem 1rem;
      width:80%;
    }
  }
  .filter-category{
    div{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:1.4rem;
      button{
        border:none;
        background-color:${({theme})=>theme.colors.white};
        text-transform:capitalize;
        cursor:pointer;
        &:hover{
          color:${({theme})=>theme.colors.btn};

        }
      }
      .active{
        border-bottom:1px solid #000;
        color:${({theme})=>theme.colors.btn};
      }
    }
  }
  .filter-company--select{
    padding:0.3rem 1.2rem;
    font-size:1.6rem;
    color:${({theme})=>theme.colors.text};
    text-transform:capitalize;
  }
  .filter-color-style{
    display:flex;
    justify-content:center;
  }
  .color-all--style{
    background-color:transparent;
    text-transform:capitalize;
    border:none;
    cursor:pointer;
  }
  .btnStyle{
    width:2rem;
    height:2rem;
    background-color:#000;
    border-radius:50%;
    margin-left:1rem;
    border:none;
    outline:none;
    opacity:0.5;
    cursor:pointer;
    &:hover{
      opacity:1;
    }
  }
  .active{
    opacity:1;
  }
  .checkStyle{
    font-size:1rem;
    color:#fff;
  }
  .filter-price{
    input{
      margin:0.5rem 0 1rem 0;
      padding:0;
      box-shadow:none;
      cursor:pointer;
    }
  }
  .filter-shipping{
    display:flex;
    align-items:center;
    gap:1rem;
  }
  .filter-clear .btn {
    background-color:#ec7063;
    color:#fff;
    font-size:1.2rem;
    padding:.7rem 1rem;
  }
  .search input{
    width:100%;
    height:3rem;
    outline:none;
    font-size:1.2rem;
    padding:4px 10px;
    border-radius:3px;
    border:1px solid ${({theme})=>theme.colors.text};
  }
  .title{
    padding:2.5rem 0 2rem 0;
    font-weight:600;
    font-size:1.6rem;
  }
  .catName{
    font-size:1.3rem;
    font-weight:100;
    margin-bottom:1.2rem;
    cursor:pointer;
    &:hover ,&.active{
      color:#5138ee;
      text-decoration:underline;
      font-weight:500;
    }
  }
  .
`

export default FilterSection