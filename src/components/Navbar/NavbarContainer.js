import React from 'react';
import StoreContext from '../../StoreContext';
import Navbar from './Navbar'
import {connect} from 'react-redux'


// const NavbarContainer = (props) => {

//     return <StoreContext.Consumer>
//         {(store) => {
//             return <Navbar sidebar={store.getState().sidebar} />
//         }
//         }
//     </StoreContext.Consumer>
// }
    let mapStateToProps = (state) => {
        return { sidebar : state.sidebar
        }
    }
    const NavbarContainer = connect (mapStateToProps) (Navbar);

    export default NavbarContainer
    