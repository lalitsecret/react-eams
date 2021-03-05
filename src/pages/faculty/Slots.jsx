import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_get,_post,_patch,_delete} from '../../api'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let [ob1,setob1]=React.useState({name:""})
	let [ob2,setob2]=React.useState({id:0,name:""})

	let {slots}=state

	const insert=e=>{
		e.preventDefault()
		_post("slots",ob1)
		.then(d=>[...slots,d])
		.then(d=>dispatch({type:"slots",payload:d}))
	}
	const update=e=>{
		e.preventDefault()
		_patch("slots/"+ob2.id,ob2)
		.then(d=>slots.map(x=>x.id===ob2.id?ob2:x))
		.then(d=>dispatch({type:"slots",payload:d}))
	}
	const del=id=>{
		_delete("slots/"+id)
		.then(d=>slots.filter(x=>x.id!==id))
		.then(d=>dispatch({type:"slots",payload:d}))
	}
	const edit=x=>{
		setob2(x)
	}
	

	return <div className="wrapper">
		<form onSubmit={insert}>
			<h3>new slots</h3>
			<input placeholder="name" value={ob1.name} onChange={e=>setob1({...ob1,name:e.target.value})}/>
			<button>insert</button>
		</form>
		{ob2.id>0?
			<form onSubmit={update}>
				<h3>edit slots {ob2.id}</h3>
				<input placeholder="name" value={ob2.name} onChange={e=>setob2({...ob2,name:e.target.value})}/>
				<button>update</button>
			</form>
			
			:null}
		<h1>All slots {slots.length}</h1>
		<table cellPadding="10" cellSpacing="0">
			<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{slots.map(x=>
					<tr key={x.id}>
						<td>{x.id}</td>
						<td>{x.name}</td>
						<td>
							<button onClick={e=>del(x.id)}><i className="fa fa-trash-o"></i></button>
							<button onClick={e=>edit(x)}><i className="fa fa-pencil"></i></button>
						</td>
					</tr>
					
				)}
			</tbody>
		</table>
	</div>
}
export default App