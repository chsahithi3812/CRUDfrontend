import { getallFriends ,deleteFriend, editFriend} from '../Service/api';
import { useEffect,useState } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import React from 'react';
const useStyles = makeStyles({
    table: {
        width: '70%',
        margin: '50px 0 0 40px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})
const AllFriends = () =>{
    const [users,setUser]=useState([]);
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        getFriends();
        
    }, []);
    const deleteUserData= async (id) => {
        await deleteFriend(id); 
        getFriends();
    }
    const getFriends = async () => {
        const response = await getallFriends();
        console.log(response.data);
        setUser(response.data);
    }

    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow  className={classes.thead}>
                    <TableCell> ID </TableCell>
                    <TableCell> Name </TableCell>
                    <TableCell> Username </TableCell>
                    <TableCell> Email</TableCell>
                    <TableCell> Course </TableCell>
                    <TableCell> College</TableCell>
                    <TableCell> Projects </TableCell>
                    <TableCell> Interns </TableCell>
                    <TableCell> CGPA </TableCell>
                    <TableCell> PhoneNumber </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            
            {users.map((user,index) => (
                    <TableRow className={classes.row}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.course}</TableCell>
                        <TableCell>{user.college}</TableCell>
                        <TableCell>{user.projects}</TableCell>
                        <TableCell>{user.interns}</TableCell>
                        <TableCell>{user.cgpa}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" color='primary' component={Link} to={`/edit/${user._id}`} >EDIT</Button>   
                        </TableCell>
                        <TableCell>
                        <Button variant='contained' color='secondary'  onClick={ () => deleteUserData(user._id)} >DELETE</Button>
                        </TableCell>        
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
export default AllFriends