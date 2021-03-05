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
			<h1>student panel</h1>
		</div>
		<div className="item">
			<Link to="/Student/Index">Index</Link>
			<Link onClick={e=>dispatch({type:"logout"})} to="/">Logout</Link>
		</div>
	</header>
}
export default App