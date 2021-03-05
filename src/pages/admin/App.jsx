import React from 'react'
import Index from './Index';
import Admin from './Admin';
import Faculty from './Faculty';
import Student from './Student';
import Courses from './Courses';
import Slots from './Slots';
import Batch from './Batch';
import Planner from './Planner';
import Graph from './Graph';
import Chart from './Chart';
import Errpage from './Errpage';
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
				<Route exact path="/Admin/Index" component={Index} />
				<Route exact path="/Admin/Admin" component={Admin} />
				<Route exact path="/Admin/Faculty" component={Faculty} />
				<Route exact path="/Admin/Student" component={Student} />
				<Route exact path="/Admin/Courses" component={Courses} />
				<Route exact path="/Admin/Slots" component={Slots} />
				<Route exact path="/Admin/Batch" component={Batch} />
				<Route exact path="/Admin/Planner" component={Planner} />
				<Route exact path="/Admin/Graph" component={Graph} />
				<Route exact path="/Admin/Chart" component={Chart} />
				<Route exact path="/Admin/Attendance" component={Attendance} />
				<Route  component={Errpage} />
			</Switch>
		</div>
		<Footer/>
	</div>
}
export default App