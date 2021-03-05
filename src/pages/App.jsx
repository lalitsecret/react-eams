import React from 'react'
import Login from './Login'
import Admin from './admin/App'
import Faculty from './faculty/App'
import Student from './student/App'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {_get} from '../api'
function App()
{
	
	return <BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/Admin/:x" component={Admin} />
			<Route exact path="/Faculty/:x" component={Faculty} />
			<Route exact path="/Student/:x" component={Student} />
		</Switch>
	</BrowserRouter>
}
export default App