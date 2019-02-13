
// dont have
// import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
// import reducers from './reducers';

// do have
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


// new that we need
import { Route, BrowserRouter as Router } from 'react-router-dom';

// import axios from 'axios';

import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage.js';


// DEFAULT VERSION
// const store = createStore(reducers, applyMiddleware(reduxThunk));

// OUR PAGE, BUT THERE'S NO AUTH ON THIS ONE
// // Here is if we have an id_token in localStorage
// if(localStorage.getItem("id_token")) {
//     // then we will attach it to the headers of each request from react application via axios
//     axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
//   }

ReactDOM.render(

    // DEFAULT VERSION

    // <Provider store={store}>
    //     <App />
    // </Provider>, 
    // document.getElementById('root')

    // OUR PAGE

    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/ProjectsPage" component={ProjectsPage} />
            
        </div>

    </Router>
    , document.getElementById('root')

    );

registerServiceWorker();
