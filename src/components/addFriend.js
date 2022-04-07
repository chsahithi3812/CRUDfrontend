import React, { useState } from 'react'
import {FormGroup,FormControl,Input,InputLabel,Button,makeStyles, Typography,Box,Paper} from "@material-ui/core"
import { addFriend } from '../Service/api'
import { useHistory } from 'react-router-dom'
const useStyle= makeStyles({
    container:{
        width:'25%',
        margin:'2% 0 0 35%',
        border: 5,
        borderBlockColor:'#111111',
        '& > *':{
            marginTop:5
        }
        
    }
})
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
const AddFriend = ()=>{
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone ,college,course,cgpa,interns,projects} = user;
    const classes = useStyle();
    let history = useHistory();
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    }
    const addUserDetails = async() => {
        await addFriend(user);
        history.push('/all');
    }
    
    return (
<FormGroup className={classes.container}>
<Typography variant="h5" align="center">ADD FRIEND</Typography>
<Box  


padding={4}
    borderTop={2}
      borderLeft={2}
      borderRight={2}
      borderBottom={2}
      borderColor="primary.main">
    <FormControl>
        <InputLabel> Name</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='name' value={name}/>
    </FormControl>
    <FormControl>
        <InputLabel> UserName</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='username' value={username}/>
    </FormControl>
    <FormControl>
        <InputLabel> Email </InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='email'value={email}/>
    </FormControl>
    <FormControl>
        <InputLabel> Phone Number</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='phone'value={phone}/>
    </FormControl> 
    <FormControl>
        <InputLabel>College</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='college'value={college}/>
    </FormControl> 
    <FormControl>
        <InputLabel>Course</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='course'value={course}/>
    </FormControl>
    <FormControl>
        <InputLabel>Projects </InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='projects'value={projects}/>
    </FormControl> 
    <FormControl>
        <InputLabel>Interns</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='interns' value={interns}/>
    </FormControl>
    <FormControl>
        <InputLabel>CGPA</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='cgpa'value={cgpa}/>
    </FormControl>
    </Box>
    <Button variant="contained" onClick={() => addUserDetails()} color="secondary" style={{marginTop: 30}}>
        ADD FRIEND
    </Button>

</FormGroup>
    )
}
export default AddFriend