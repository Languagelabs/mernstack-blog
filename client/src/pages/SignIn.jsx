import { useState, Fragment } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FcBinoculars } from "react-icons/fc";  
import { TextInput, Button, Alert, Spinner, Label } from 'flowbite-react'



export default function SignIn() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!formData.email || !formData.password ||formData.email === '' || formData.password === ''){
      setLoading(false)
      return setErrorMessage('All fields are required please')
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if(data.success === false){
        setLoading(false)
        return setErrorMessage(data.message)
      }
      if(res.ok){
        console.log(data)
        navigate('/')
      }
      setLoading(false)
    } catch (error) {
        setLoading(false)
        return setErrorMessage(error.message)
    }
  }
  return (
    <div className="max-w-4xl h-fit mx-auto mt-20 p-4 flex flex-col md:flex-row gap-5">
      <div className="flex-1 md:pt-5">
        <FcBinoculars  className='w-20 h-20 ' />
        <h1 className='text-5xl font-bold pl-1 font-mono '> World-i </h1>
        <p className="text-sm"> Sign in here to continue as our member</p>
      </div>
      <div className="right flex-1">
        <form className="flex flex-col gap-3"  onSubmit={handleSubmit}>
          <div className="">
            <Label value="Email" htmlFor="email" />
            <TextInput type="email" placeholder="john@doe.com" id="email" onChange={handleChange} />
          </div> 
          <div className="">
            <Label value="Password" htmlFor="password" />
            <TextInput type="password" placeholder="password" id="password" onChange={handleChange} />
          </div>
          <Button type="submit" gradientDuoTone='purpleToBlue' className="w-full mt-5" disabled={loading}>
            {loading ? (
              <Fragment>
                <Spinner size='sm' />
                <span className="ml-2">Loading...</span>
              </Fragment>
            ) : 'Sign in'}
          </Button>
        </form>
        <div className="flex text-sm gap-1 mt-2">
          <p>Do not have an account? </p>
            <Link to='/sign-up' className="text-blue-500">Sign up</Link>
        </div>
        {errorMessage && <Alert color='failure' className="mt-3">{errorMessage}</Alert>}
      </div>
    </div>
  )
}
