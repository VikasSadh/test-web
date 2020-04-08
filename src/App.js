import React, { Component } from 'react';
import { Redirect,BrowserRouter,HashRouter, Route, Switch,Router } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import { createBrowserHistory } from 'history';
import $ from 'jquery';

import './App.scss';
import {createStore, combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {Provider}  from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

const reducers = {
	toastr: toastrReducer,	// <- Mounted at toastr.

}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
// const history = createBrowserHistory();
const loading = () => <div className="loader"></div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const FrontendLayout = React.lazy(() => import('./containers/FrontendLayout'));



// Pages
const Login = React.lazy(() => import('./adminviews/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const ComingSoon = React.lazy(() => import('./views/Pages/ComingSoon/ComingSoon'));


 let adminsession = (localStorage.getItem("admin_session")!=null) ? JSON.parse(localStorage.getItem("admin_session")) : null;
 let admin_session = adminsession;
// console.log(admin_session);
class App extends Component {
	componentWillMount() {
	   $(function() {
	      $(this).bind("contextmenu", function(e) {
	      e.preventDefault();
	   });
	 }); 
	}
  render() {
    return (
	

      <BrowserRouter >
			<Provider store={store}>
					  <div>
						<ReduxToastr
						  timeOut={4000}
						  newestOnTop={false}
						  preventDuplicates
						  position="top-right"
						  getState={(state) => state.toastr} // This is the default
						  transitionIn="fadeIn"
						  transitionOut="fadeOut"
						  progressBar
						  closeOnToastrClick/>
					  </div>
				</Provider>
          <React.Suspense fallback={loading()}>

            <Switch>
             
			 { /* <Route exact path="/" name="Comingsoon Page" render={props => <ComingSoon {...props}/>} /> */ }
				
				<Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
				<Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
			  
				<Route exact path="/ez-admin/login" name="Login Page" render={props =>  <Login {...props}/> } />
				
				<Route  path="/ez-admin/" name="dashboard" render={props =>  <DefaultLayout {...props}/>  } />
				
				<Route   path="/" name="FrontHome" render={props => <FrontendLayout {...props}/>} /> 
				
				
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
