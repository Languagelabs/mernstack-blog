import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { FcBinoculars } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try{
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      console.log(data)
    }catch(error){
       console.log('error' + error)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value }) 
  } 

  return (
    <div className="max-w-4xl h-fit mx-auto mt-20 p-4 flex flex-col md:flex-row gap-5">
      <div className="flex-1 md:pt-5">
        <FcBinoculars  className='w-20 h-20 ' />
        <h1 className='text-5xl font-bold pl-1 font-mono '> World-i </h1>
        <p className="text-sm"> Sign up here to be a member of this robust informative blog about events and happenings globally.</p>
      </div>
      <div className="flex-1"> 
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <Label value="Username" htmlFor="username"/>
            <TextInput type="text" placeholder="Username" id="username" onChange={handleChange} />
          </div>
          <div>
            <Label value="E-mail" htmlFor="email"/>
            <TextInput type="email" placeholder="Username@gmail.com" id="email" onChange={handleChange}/>
          </div>
          <div>
            <Label value="Password" htmlFor="password"/>
            <TextInput type="password" placeholder="Username" id="password" onChange={handleChange}/>
          </div>
          <Button  type="submit" gradientDuoTone='purpleToBlue' className="w-full mt-5"> Sign up </Button> 
        </form>
        <div className="flex text-sm gap-1 mt-1">
          <p>Have an account? </p>
          <Link to='/sign-in' className="text-blue-500">Sign In</Link>
        </div>
      </div>
    </div>
  )
}
