import React from 'react';
import Aux from '../../hoc/AuxComponent';
import './Layout.css';

const layout = (porps) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="Content">
                {porps.children}
            </main>
        </Aux>
    )
}

export default layout;