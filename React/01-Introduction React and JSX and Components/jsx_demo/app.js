import React from "https://esm.sh/react@19.2.0";


const app1 = React.createElement('h1', null, 'My first React App!');
const app2 = React.createElement('h2', null, 'The best framework ever!');

const app = React.createElement('div', {className: 'app-container'}, app1, app2)


export default app