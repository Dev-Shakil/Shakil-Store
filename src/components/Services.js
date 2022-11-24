import styled from "styled-components";
import {TbTruckDelivery} from "react-icons/tb";
import {GiReceiveMoney} from "react-icons/gi";
import {MdSecurity} from "react-icons/md";
import {RiSecurePaymentLine} from "react-icons/ri";


const Services = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-three-column">
                    <div className="services-1">
                        <div>
                            <TbTruckDelivery className="icon" />
                            <h3>Super Fast and Free Delivery</h3>
                        </div>
                        
                    </div>
                    <div className="services-2">
                        <div className="services-column-2">
                            <div>
                            <MdSecurity className="icon"/>
                            <h3>Non-contact Shipping</h3>
                            </div>
                        </div>
                        <div className="services-column-2">
                            <div>
                            <GiReceiveMoney className="icon"/>
                            <h3>Money-back Guaranteed</h3>
                            </div>
                        </div>
                    </div>
                    <div className="services-3">
                        <div>
                            <RiSecurePaymentLine className="icon"/>
                            <h3>
                                Super Secure Payment System
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            </Wrapper>
    );
};

const Wrapper = styled.section`
    padding:9rem 0;
    .grid{
        gap:4.8rem;
    }
    .services-1,
    .services-2,
    .services-3{
        &:hover{
            background:#5138ee;
            color:white;
          }
        transition:.8s all ease;
        width:auto;
        height:30rem;
        display:flex;
        flex-direction:column;
        flex:1;
        justify-content:center;
        align-content:center;
        background-color:${({theme})=>theme.colors.bg};
        text-align:center;
        border-radius:2rem;
        box-shadow:rgba(0,0,0,0.5) 0px 1px 2px 0px;
    }
     }
     .services-2{
        gap:2rem;
        transition:.8s all ease;
        background-color:transparent;
        box-shadow:none;
        &:hover{
            background:none;
           color:black;
          }

            .services-column-2{
                &:hover{
                    background:#5138ee;
                    color:white;
                  }

                background:${({theme})=>theme.colors.bg};
                transition:.8s all ease;
                display:flex;
                flex-direction:row;
                flex:1;
                justify-content:center;
                align-items:center;
                border-radius:2rem;
                padding:0 2rem;
                box-shadow:rgba(0,0,0,0.5) 0px 1px 2px 0px;

                div{
                    display:flex;
                    flex-direction:row;
                    justify-content:center;
                    align-items:center;
                    gap:1rem;
                    
                }
            }
           
     }
     h3{
        margin-top:1.4rem;
        font-size:1.8rem;

     }
     .icon{
        width:8rem;
        height:8rem;
        padding:1.5rem;
        border-radius:50%;
        background-color:#fff;
        color:#5138ee;
     }
     @media (max-width: ${({theme})=> theme.media.mobile}){
        .services-1,
    .services-2,
    .services-3{
        width:auto;
        height:20rem;
        display:flex;
        flex-direction:row;
        flex:1;
        justify-content:center;
        align-content:center;
        align-items:center;
        background-color:${({theme})=>theme.colors.bg};
        text-align:center;
        border-radius:2rem;
        box-shadow:rgba(0,0,0,0.5) 0px 1px 2px 0px;
    }
    .services-2{
        gap:4rem;
        background-color:transparent;
        flex-direction:column;
        box-shadow:none;
        height:40rem;

            .services-column-2{
                background:${({theme})=>theme.colors.bg};
                display:flex;
                flex-direction:row;
                flex:1;
                height:15rem;
                width:100%;
                justify-content:center;
                align-items:center;
                border-radius:2rem;
                padding:0 2rem;
                box-shadow:rgba(0,0,0,0.5) 0px 1px 2px 0px;

                div{
                    
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    gap:1rem;
                    
                }
            }
           
     }
     h3{
        margin-top:1.4rem;
        font-size:2.5rem;

     }
     .icon{
        width:8rem;
        height:8rem;
        padding:1.5rem;
        border-radius:50%;
        background-color:#fff;
        color:#5138ee;
     }
     }
`
    
 



export default Services;