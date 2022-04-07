import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography,Box,Paper } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getallFriends, editFriend } from '../Service/api';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: '',
    interns:'',
    projects:'',
    cgpa:'',
    course:'',
    college:''

}

const useStyles = makeStyles({
    container:{
        width:'25%',
        margin:'5% 0 0 35%',
        border: 5,
        borderBlockColor:'#111111',
        '& > *':{
            marginTop:5
        }
        
    }
})

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone ,college,course,cgpa,interns,projects} = user;
    let { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, [id]);

    const loadUserDetails = async() => {
        const response = await getallFriends(id);
        console.log(response.data);
        setUser(response.data);
        console.log(name);
    }

    const editUserDetails = async() => {
        const response = await editFriend(id, user);
        history.push('/all');
    }

    const onValueChange = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (

        <FormGroup className={classes.container}>
<Typography variant="h5" align="center">EDIT FRIEND DETAILS</Typography>


<Box  


padding={4}
    borderTop={2}
      borderLeft={2}
      borderRight={2}
      borderBottom={2}
      borderColor="primary.main">

     <FormControl>
        <InputLabel > Name</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='name' value={name}/>
    </FormControl>
    <FormControl>
        <InputLabel> UserName</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='username' value={username}/>
    </FormControl>
    <FormControl>
        <InputLabel> Email </InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='email' value={email}/>
    </FormControl>
    <FormControl>
        <InputLabel> Phone Number</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='phone' value={phone}/>
    </FormControl> 
    <FormControl>
        <InputLabel>College</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='college' value={college}/>
    </FormControl>
    <FormControl>
        <InputLabel>Course</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='course' value={course}/>
    </FormControl>
    <FormControl>
        <InputLabel>Projects </InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='projects' value={projects}/>
    </FormControl> 
    <FormControl>
        <InputLabel>Interns</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='interns' value={interns}/>
    </FormControl>
    <FormControl>
        <InputLabel>CGPA</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='cgpa' value={cgpa}/>
    </FormControl>


    </Box>
    
    
    <Button variant="contained" onClick={() => editUserDetails()} color="secondary" style={{marginTop: 30}}>
        EDIT FRIEND DETAILS
    </Button>

</FormGroup>

    )
}

export default EditUser;