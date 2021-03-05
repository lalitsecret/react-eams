import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {_get,_post,_patch,_delete} from '../../api'
function App()
{
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let {faculty,student,courses,slots,batch,fid,sid,cid,slot_id,dt} =state


	const p1=(e,x) =>{
		dispatch({type:"sid",payload:x.name})
		dispatch({type:"cid",payload:x.cid})
	}
	const p2=(e,x) =>{
		e.preventDefault()
		dispatch({type:"slot_id",payload:x})
	}
	const p3=(e,x) =>{
		e.preventDefault()
		dispatch({type:"slot_id",payload:x})
		let data={
			p:0,
			reason:"",
			remarks:"",
			approved:"",
			fid,
			sid,cid,slot_id,dt
		}
		_post("batch",data)
		.then(d=>[...batch,d])
		.then(d=>dispatch({type:"batch",payload:d}))
	}
	
	const _fid=x=>{

		dispatch({type:"fid",payload:x})
	}
	

	const del=id=>{
		_delete("batch/"+id)
		.then(d=>batch.filter(x=>x.id!==id))
		.them(d=>dispatch({type:"batch",payload:d}))
	}
	return <div className="flex">
		<div className="item1">
			<h5>slots {slots.length}</h5>
			<div className="scroll">
				{slots.map(x=>
					<p
					onDragOver={e=>p2(e,x.name)}
					onDrop={e=>p3(e,x.name)}
					className={x.name===slot_id?'active':''}
					>{x.name}</p>
				)}
			</div>
		</div>
		<div className="item1">
			<h5>student {student.length}</h5>
			<div className="scroll">
				{student.map(x=>
					<p
					draggable={true}
					onDragStart={e=>p1(e,x)}
					className={x.name===sid?'active':''}
					>{x.name}</p>
				)}
			</div>
		</div>
		<div className="item1">
			<h5>faculty {faculty.length}</h5>
			<div className="scroll">
				{faculty.map(x=>
					<p
					onClick={e=>_fid(x.name)}
					className={x.name===fid?'active':''}
					>{x.name}</p>
				)}
			</div>
		</div>
		<div className="item1">
			<h5>courses {courses.length}</h5>
			<div className="scroll">
				{courses.map(x=>
					<p

					className={x.name===cid?'active':''}
					>{x.name}</p>
				)}
			</div>
		</div>
		<div className="item2">
			<input type="date" value={dt} onChange={e=>dispatch({type:"dt",payload:e.target.value})}/>
			<h5>Batch {batch.length}</h5>
			<div className="scroll">
				<table cellSpacing="0" cellPadding="10">
					<thead>
						<tr>
							<th>dt</th>
							<th>time</th>
							<th>student</th>
							<th>course</th>
							<th>faculty</th>
							<th>actions</th>
						</tr>
					</thead>
					<tbody>
						{batch.map(x=>
							<tr key={x.id}>
								<td>{x.dt}</td>
								<td>{x.slot_id}</td>
								<td>{x.sid}</td>
								<td>{x.cid}</td>
								<td>{x.fid}</td>
								<td>
									<button onClick={e=>del(x.id)}><i className="fa fa-trash-o"></i></button>
								</td>
							</tr>
							
						)}
					</tbody>
				</table>
			</div>
		</div>
	</div>
}
export default App