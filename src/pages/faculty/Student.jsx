import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_get,_post,_patch,_delete} from '../../api'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let [ob1,setob1]=React.useState({name:"",email:"",phone:"",password:"",cid:""})
	let [ob2,setob2]=React.useState({id:0,name:"",email:"",phone:"",password:"",cid:""})

	let {student,courses}=state

	const insert=e=>{
		e.preventDefault()
		_post("student",ob1)
		.then(d=>[...student,d])
		.then(d=>dispatch({type:"student",payload:d}))
	}
	const update=e=>{
		e.preventDefault()
		_patch("student/"+ob2.id,ob2)
		.then(d=>student.map(x=>x.id===ob2.id?ob2:x))
		.then(d=>dispatch({type:"student",payload:d}))
	}
	const del=id=>{
		_delete("student/"+id)
		.then(d=>student.filter(x=>x.id!==id))
		.then(d=>dispatch({type:"student",payload:d}))
	}
	const edit=x=>{
		setob2(x)
	}
	

	return <div className="wrapper">
		<datalist id="abc">
			{courses.map(x=>
				<option value={x.name}>{x.name}</option>
			)}
		</datalist>
		<form onSubmit={insert}>
			<h3>new student</h3>
			<input placeholder="name" value={ob1.name} onChange={e=>setob1({...ob1,name:e.target.value})}/>
			<input placeholder="email" value={ob1.email} onChange={e=>setob1({...ob1,email:e.target.value})}/>
			<input placeholder="phone" value={ob1.phone} onChange={e=>setob1({...ob1,phone:e.target.value})}/>
			<input placeholder="password" value={ob1.password} onChange={e=>setob1({...ob1,password:e.target.value})}/>
			<input list="abc" placeholder="cid" value={ob1.cid} onChange={e=>setob1({...ob1,cid:e.target.value})}/>
			<button>insert</button>
		</form>
		{ob2.id>0?
			<form onSubmit={update}>
				<h3>edit student {ob2.id}</h3>
				<input placeholder="name" value={ob2.name} onChange={e=>setob2({...ob2,name:e.target.value})}/>
				<input placeholder="email" value={ob2.email} onChange={e=>setob2({...ob2,email:e.target.value})}/>
				<input placeholder="phone" value={ob2.phone} onChange={e=>setob2({...ob2,phone:e.target.value})}/>
				<input placeholder="password" value={ob2.password} onChange={e=>setob2({...ob2,password:e.target.value})}/>
				<input list="abc" placeholder="cid" value={ob2.cid} onChange={e=>setob2({...ob2,cid:e.target.value})}/>
				<button>update</button>
			</form>
			
			:null}
		<h1>All student {student.length}</h1>
		<table cellPadding="10" cellSpacing="0">
			<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>email</th>
					<th>phone</th>
					<th>password</th>
					<th>cid</th>
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{student.map(x=>
					<tr key={x.id}>
						<td>{x.id}</td>
						<td>{x.name}</td>
						<td>{x.email}</td>
						<td>{x.phone}</td>
						<td>{x.password}</td>
						<td>{x.cid}</td>
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