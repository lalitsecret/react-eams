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
	let dispatch=useDispatch()
	React.useEffect(function(){
		_get("admin").then(d=>dispatch({type:"admin",payload:d}))
		_get("faculty").then(d=>dispatch({type:"faculty",payload:d}))
		_get("student").then(d=>dispatch({type:"student",payload:d}))
		_get("courses").then(d=>dispatch({type:"courses",payload:d}))
		_get("slots").then(d=>dispatch({type:"slots",payload:d}))
		_get("batch").then(d=>dispatch({type:"batch",payload:d}))
	},[])
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