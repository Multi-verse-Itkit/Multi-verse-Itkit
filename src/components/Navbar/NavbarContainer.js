import React from 'react';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar'

const NavbarContainer = (props) => {
    
    return <StoreContext.Consumer>
        {(store) => {
                      console.log({store, props})

            return <Navbar sidebar={store.getState().sidebar}/>
        }
    }
    </StoreContext.Consumer>
    }

    export default NavbarContainer
    