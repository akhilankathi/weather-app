import React,{useEffect, useRef, useState} from 'react'

const App = () => {
  
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }
const useRef = React.createRef()
useEffect(()=>{
  useRef.current.focus()
},[])
  return (
    <div>
      <center>
        
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="city" onChange={changeHandler} value={city} ref={useRef}/> <br /><br />
              <input type="submit" value="Get Temperature" className='btn btn-success'/>
            </form><br /> <br />
            <div>
               <h1 className='res'>{result}</h1> 
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App