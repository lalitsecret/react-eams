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
			<h1>faculty panel</h1>
		</div>
		<div className="item">
			<Link to="/Faculty/Index">Index</Link>
			<Link to="/Faculty/Student">Student</Link>
			<Link to="/Faculty/Courses">Courses</Link>
			<Link to="/Faculty/Slots">Slots</Link>
			<Link to="/Faculty/Batch">Batch</Link>
			<Link to="/Faculty/Attendance">Attendance</Link>
			<Link onClick={e=>dispatch({type:"logout"})} to="/">Logout</Link>
		</div>
	</header>
}
export default App