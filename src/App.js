import React from 'react';
import Header from './Header';
import HomeBody from './HomeBody';
import AboutBody from './AboutBody';
import ContactBody from './ContactBody';
import Footer from './Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
  	<BrowserRouter>
	    <div className="App">
	      <Header />
	      <Switch>
		      <Route path="/" exact component={HomeBody} />
		      <Route path="/about" component={AboutBody} />
		      <Route path="/contact" component={ContactBody} />
	      </Switch>
	      <Footer />
	    </div>
	 </BrowserRouter>
  );
}

export default App;
