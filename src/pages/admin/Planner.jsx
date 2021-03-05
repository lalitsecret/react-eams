import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_get,_post,_patch,_delete} from '../../api'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	return <div>Planner</div>
}
export default App