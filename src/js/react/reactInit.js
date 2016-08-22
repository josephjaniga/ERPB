
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store.js';

// COMPONENTS
import ExampleComponent from './components/ExampleComponent.component.js';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/** REACT - App Renderer */
export let uiRender = ()=>{
    let state = store.getState();
    ReactDOM.render(
        <ExampleComponent
            data={state}/>,
        document.getElementById('example-component')
    );
};

store.subscribe(uiRender);
