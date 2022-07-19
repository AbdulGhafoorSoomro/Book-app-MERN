import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetails = ()=>{
    const [inputs, setInputs] = useState({})
    const id = useParams().id;
    const [checked,setChecked] = useState(false);
    console.log(id)
    useEffect(()=>{
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:5000/books/${id}`)
            .then(res=>res.data).then(data=>setInputs(data.book))
        }
        fetchHandler()
    },[id])
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const handleChange = (e)=>{
        console.log(e);
    }
    console.log(inputs)
    return
    <div>
    {  inputs && <form onSubmit={handleSubmit}>
<Box 
display="flex" 
flexDirection="column" 
justify-content={'center'} 
maxWidth={700}
alignContent={'center'}
alignSelf="center"
marginLeft={'auto'}
marginRight='auto'
marginTop={10}
>
<FormLabel>Name</FormLabel>
<TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />
<FormLabel>Author</FormLabel>
<TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />;
<FormLabel>Description</FormLabel>
<TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />
<FormLabel>Price</FormLabel>
<TextField value={inputs.price} onChange={handleChange} type='number' margin="normal" fullWidth variant="outlined" name="price" />
<FormLabel>Image</FormLabel>
<TextField value={inputs.Image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />

<FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>} label="Available"/>
<Button variant='contained' type='submit'>Update Book</Button>
</Box>
</form>}


    </div>
}

export default BookDetails