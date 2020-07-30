import React from 'react';

import AuxHeader from '../../hoc/AuxHeader';
import classes from './Layout.css';

const layout = ( props ) => (
    <AuxHeader>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </AuxHeader>
);

export default layout;