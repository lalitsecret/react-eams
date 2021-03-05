import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_get,_post,_patch,_delete} from '../../api'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let [ob1,setob1]=React.useState({name:"",price:"",days:""})
	let [ob2,setob2]=React.useState({id:0,name:"",price:"",days:""})

	let {courses}=state

	const insert=e=>{
		e.preventDefault()
		_post("courses",ob1)
		.then(d=>[...courses,d])
		.then(d=>dispatch({type:"courses",payload:d}))
	}
	const update=e=>{
		e.preventDefault()
		_patch("courses/"+ob2.id,ob2)
		.then(d=>courses.map(x=>x.id===ob2.id?ob2:x))
		.then(d=>dispatch({type:"courses",payload:d}))
	}
	const del=id=>{
		_delete("courses/"+id)
		.then(d=>courses.filter(x=>x.id!==id))
		.then(d=>dispatch({type:"courses",payload:d}))
	}
	const edit=x=>{
		setob2(x)
	}
	

	return <div className="wrapper">
		<form onSubmit={insert}>
			<h3>new courses</h3>
			<input placeholder="name" value={ob1.name} onChange={e=>setob1({...ob1,name:e.target.value})}/>
			<input placeholder="price" value={ob1.price} onChange={e=>setob1({...ob1,price:e.target.value})}/>
			<input placeholder="days" value={ob1.days} onChange={e=>setob1({...ob1,days:e.target.value})}/>
			<button>insert</button>
		</form>
		{ob2.id>0?
			<form onSubmit={update}>
				<h3>edit courses {ob2.id}</h3>
				<input placeholder="name" value={ob2.name} onChange={e=>setob2({...ob2,name:e.target.value})}/>
				<input placeholder="price" value={ob2.price} onChange={e=>setob2({...ob2,price:e.target.value})}/>
				<input placeholder="days" value={ob2.days} onChange={e=>setob2({...ob2,days:e.target.value})}/>
				<button>update</button>
			</form>
			
			:null}
		<h1>All courses {courses.length}</h1>
		<table cellPadding="10" cellSpacing="0">
			<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>price</th>
					<th>days</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{courses.map(x=>
					<tr key={x.id}>
						<td>{x.id}</td>
						<td>{x.name}</td>
						<td>{x.price}</td>
						<td>{x.days}</td>
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