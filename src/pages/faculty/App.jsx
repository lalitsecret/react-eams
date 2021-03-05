import React from 'react'
import Index from './Index';
import Student from './Student';
import Courses from './Courses';
import Slots from './Slots';
import Batch from './Batch';
import Header from './Header';
import Footer from './Footer';
import Attendance from './Attendance';
import {Switch,Route} from 'react-router-dom'
function App()
{
	return <div>
		<Header/>
		<div className="container">
			<Switch>
				<Route exact path="/Faculty/Index" component={Index} />
				<Route exact path="/Faculty/Student" component={Student} />
				<Route exact path="/Faculty/Courses" component={Courses} />
				<Route exact path="/Faculty/Slots" component={Slots} />
				<Route exact path="/Faculty/Batch" component={Batch} />
				<Route exact path="/Faculty/Attendance" component={Attendance} />
			</Switch>
		</div>
		<Footer/>
	</div>
}
export default App