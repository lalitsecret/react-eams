import React from 'react'
import Index from './Index';
import Header from './Header';
import Footer from './Footer';
import {Switch,Route} from 'react-router-dom'
function App()
{
	return <div>
		<Header/>
		<div className="container">
			<Switch>
				<Route exact path="/Faculty/Index" component={Index} />
			</Switch>
		</div>
		<Footer/>
	</div>
}
export default App