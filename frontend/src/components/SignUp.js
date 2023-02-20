import {react, useState} from 'react';

export default function SignaUp(){

const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');

const getDataBtn=()=>{
    console.warn(name , email , password);
}


    return(
       <>
       <div class="col-12 container pt-5">
  <label for="formGroupExampleInput2" class="form-label">Name</label>
  <input type="text" value={name} class="form-control mb-4" onChange={(e)=>setName(e.target.value)} id="formGroupExampleInput2" placeholder="Enter Name..."/>

  <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" value={email} class="form-control mb-4" onChange={(e)=>setEmail(e.target.value)} id="inputEmail4" placeholder='Enter Email...'/>
  <label for="formGroupExampleInput2" class="form-label">Password</label>
  <input type="password" value={password} class="form-control mb-4" onChange={(e)=>setPassword(e.target.value)} id="formGroupExampleInput2" placeholder="Enter Password..."/>
  <button type="submit" onClick={getDataBtn} class="btn btn-primary">Sign in</button>
</div>

       </>
    )
}