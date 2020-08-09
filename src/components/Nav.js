import React from 'react';
import {MDBBtn ,MDBNavbar,MDBIcon,
    MDBNavbarNav,MDBInput ,MDBNavItem ,MDBFormInline } from "mdbreact";

const Nav = ({setisOn, setcountry, setcity}) => {
    return ( 
        <MDBNavbar color="cyan darken-3" id="nav" >
          <MDBNavbarNav left>
          <MDBFormInline>
          <h4><strong class="white-text" >The Weather</strong></h4>
          <MDBIcon far icon="sun" />
          </MDBFormInline>

          </MDBNavbarNav>
      <MDBNavbarNav right>
            <MDBNavItem>
            <form onSubmit={(e)=>{
                e.preventDefault();
                setisOn(true);
                console.log(true);
                }} > 

              <MDBFormInline waves>
            <div className="md-form my-0">
                  <MDBInput className="form-control mr-sm-2" background size="lg" 
                onChange={(e)=>{    
                    setcity(e.target.value);

                }}
                   type="text" label="city" aria-label="Search" />
                </div>

                <div className="md-form my-0">
                  <MDBInput className="form-control mr-sm-2" background size="lg" 
                  onChange={(e)=>{
                      setcountry(e.target.value );  
                    } }
                  type="text" label="country" aria-label="Search" />
                </div>
                <MDBBtn type='submit' onClick={()=>setisOn(true)} gradient="aqua" >Search</MDBBtn>                
              </MDBFormInline>
              </form>


            </MDBNavItem>
          </MDBNavbarNav>
      </MDBNavbar>
     );
}
 
export default Nav;