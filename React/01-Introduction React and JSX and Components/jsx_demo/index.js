import app from './app.js'

const rootDomElement = document.getElementById('root');
const rootReactElement = ReactDOM.createRoot(rootDomElement);

rootReactElement.render(app);