import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../../frontviews/LoginPage'
import * as router from 'react-router-dom';
//import { Container } from 'reactstrap';
// sidebar nav config
// import navigation from '../../_nav_byadmin';
// routes config
// import routes from '../../admin_routes';
import routes from '../../front_routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class FrontendLayout extends Component {
  constructor(props){
    super(props)
    this.state = {
      loginModal: false
    }
    this.loginModalPopup = this.loginModalPopup.bind(this)
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div> 
 

  loginModalPopup = () => {
    debugger
    this.setState({loginModal: !this.state.loginModal})
  }

  render() {
    return (
      <div className="app">
       <DefaultHeader openModalPopup={this.loginModalPopup} />
              <Suspense>
                <Switch>
                  {routes.map((route, idx) => {
					
					
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.exact}
                        render={props => (
                          <route.component {...props}  />
                        )} />
                    ) : 'sdd';
                  })}
				
                </Switch>
              </Suspense>	
        <LoginPage closeModalPopup={this.loginModalPopup} {...this.state} />
        <DefaultFooter />      
      </div>
    );
  }
}

export default FrontendLayout;
