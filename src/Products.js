import React, { useContext } from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProdeuctList"
import { FilterContext } from "./Context/filter_context";

const Products = () => {
  const {all_products} = useContext(FilterContext)
  return <Wrapper>
    <div className="grid grid-filter-column container">
      <div>
        <FilterSection/>
      </div>
      <div className="product-view--sort">
        <div className="sort-filter">
          <Sort/>
        </div>
        <div className="main-product">
          <ProductList filter={all_products}/>
        </div>
      </div>
    </div>

  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
