import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_get,_post,_patch,_delete} from '../../api'
import {Link} from 'react-router-dom'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	return <header>
		<div className="item">
			<h1>admin panel</h1>
		</div>
		<div className="item">
			<Link to="/Admin/Index">Index</Link>
			<Link to="/Admin/Admin">Admin</Link>
			<Link to="/Admin/Faculty">Faculty</Link>
			<Link to="/Admin/Student">Student</Link>
			<Link to="/Admin/Courses">Courses</Link>
			<Link to="/Admin/Slots">Slots</Link>
			<Link to="/Admin/Batch">Batch</Link>
			<Link to="/Admin/Planner">Planner</Link>
			<Link to="/Admin/Graph">Graph</Link>
			<Link to="/Admin/Chart">Chart</Link>
			<Link to="/Admin/Attendance">Attendance</Link>
			<Link onClick={e=>dispatch({type:"logout"})} to="/">Logout</Link>
		</div>
	</header>
}
export default App