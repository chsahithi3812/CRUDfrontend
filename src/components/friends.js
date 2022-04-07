import React from 'react'
import friends from '../Assets/Images/friends.jpg'
import {Box,Typography,makeStyles} from '@material-ui/core'
const useStyle = makeStyles({

})
const friEnds = () =>{
    return (
<Box>

<Box>
<img src={friends} style={{width:'50%', margin:'60px 0 0 25%'}}/>
</Box>
</Box>

    )
}
export default friEnds;