import React from 'react'
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';
import {NavLink} from "react-router-dom";
import { Button } from '../styles/Button';


const ListView = ({product}) => {
  return (
    <Wrapper className="section">
        <div className="container grid">
            {product.map((curElem)=>{
                const {id, name, image, price, description} = curElem;
                return (
                    <div className="card grid grid-two-column">
                        <figure>
                            <img src={image} alt={name} />
                        </figure>
                        <div className="card-data">
                            <h3>{name}</h3>
                            <p>
                                <FormatPrice price={price}/>
                            </p>
                            <p>{description.slice(0, 90)}...</p>
                            <NavLink to={`/singleproduct/${id}`} className="btn-main">
                                <Button className="btn">Read More</Button>
                            </NavLink>
                        </div>
                    </div>
                )
            })}
        </div>

    </Wrapper>
  )
};
const Wrapper = styled.section`
padding:9rem 0;
.container{
    max-width:110rem;
}
.grid{
    gap:1.5rem;
}
figure{
  width:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  overflow:hidden;
  transition:all 0.5s linear;
  &::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:0%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    cursor:pointer;
  }
  &:hover::after{
    width:100%;
  }
  &:hover img{
    transform:scale(1.2);
  }
  img{
    max-width:90%;
    margin-top:1.5rem;
    height:20rem;
    transition:all 0.2s linear;

  }
  .caption{
    position:absolute;
    top:15%;
    right:10%;
    text-transform:uppercase;
    background-color:${({theme})=> theme.colors.bg};
    color:${({theme})=> theme.colors.helper};
    padding:0.8rem 2rem;
    font-size:1.2rem;
    border-radius:2rem;
  }
}
.card{
  border:0.1rem solid rgb(170 170 170 / 40%);

    .card-data{
      padding:1rem 2rem;
    }
    .card-data-flex{
      margin:2rem 0;
      display:flex;
      justify-content:space-between;
      align-items:center;

    }
    h3{
      color:${({theme})=> theme.colors.black};
      text-transform:capitalize;
    }
    .card-data--price{
      color:${({theme})=> theme.colors.helper};
    }
    .btn{
      margin:2rem 0;
      background-color:rgb(0 0 0 / 0%);
      border:.1rem solid rgb(98 84 243);
      display:flex;
      justify-content:center;
      align-items:center;
      color:rgb(98 84 243);

      &:hover{
        background-color:rgb(98 84 243);

      }
      &:hover a{
       color:white;
      }
      a{
        color:rgb(98 84 243);
        font-size:1.4rem;
       }
    }
    .btn-main .btn:hover{
        color:#fff;
    }
}
`

export default ListView