import axios from 'axios'
export function _get(str)
{
	return axios.get(`http://localhost:4000/${str}`).then(res=>res.data)
}

export function _delete(str)
{
	return axios.delete(`http://localhost:4000/${str}`).then(res=>res.data)
}

export function _post(str,data)
{
	return axios.post(`http://localhost:4000/${str}`,data).then(res=>res.data)
}

export function _patch(str,data)
{
	return axios.patch(`http://localhost:4000/${str}`,data).then(res=>res.data)
}

