import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function App(props)
{

	let [ob,setob]=React.useState({email:"",password:""})
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let {admin,faculty,student}=state


	const login=role=>{
		let users=state[role]
		if(users.some(x=>x.email===ob.email && x.password===ob.password))
		{
			let user=users.find(x=>x.email===ob.email && x.password===ob.password)
			dispatch({type:"login",payload:user,role})
			alert("loggedin as "+role)
			if(role==="admin")
			{
				props.history.push("/Admin/Index")
			}
			if(role==="faculty")
			{
				props.history.push("/Faculty/Index")
			}
			if(role==="student")
			{
				props.history.push("/Student/Index")
			}
			
		}
		else
		{
			alert("failed to login as "+role)
		}
	}
	return <div className="form">
		<h1>Login</h1>
		<p>email</p>
		<input placeholder="email" value={ob.email} onChange={e=>setob({...ob,email:e.target.value})}/>
		<p>password</p>
		<input placeholder="password" value={ob.password} onChange={e=>setob({...ob,password:e.target.value})}/>
		<button onClick={e=>login('admin')}>admin </button>
		<button onClick={e=>login('faculty')}>faculty </button>
		<button onClick={e=>login('student')}>student </button>
	</div>
}
export default App