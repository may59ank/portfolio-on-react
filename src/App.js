import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './Components/Experience';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
// import Trystate from './Components/Trystate';
// import Binding from './Components/Binding';
// import Binding2 from './Components/Binding-2';
import { Route, Switch } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Hire from './Pages/Hire';
import Skills from './Pages/Skills';
import Error from './Components/Error';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/hire" component={Hire} />
          <Route exact path="/skills" component={Skills} />
          <Route component={Error} />
        </Switch>
        {/* <Binding2 /> */}
        <About />
        <Experience />
        <Footer />
        {/* <Binding /> */}
      </div>
    )
  }
}

export default App;
