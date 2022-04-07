
import axios from 'axios';

const url = 'http://localhost:9000';


export const getallFriends = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addFriend = async (user) => {
    return await axios.post(`${url}/add`, user);
}

export const deleteFriend = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

export const editFriend = async (id, user) => {
    console.log(user);
    return await axios.put(`${url}/edit/${id}`, user)
}