import React, {useState} from 'react'
import './App.css';

function App() {
// State Variables
const [height, setHeight]   = useState(0)
const [weight, setWeight]   = useState(0)
const [bmi, setBmi]         = useState('')
const [message, setMessage] = useState('')

const MINHEIGHT =12
const MINWEIGHT = 1
const MAXWEIGHT = 777
const MAXHEIGHT = 96


let calculateBMI = (e) => {
  e.preventDefault()

  if((height === 0) || (weight === 0))
{
  alert("must enter a height and a weight")
}

else if ((height < MINHEIGHT) || (height > MAXHEIGHT))
{
  alert("Height must be between " + MINHEIGHT + "and" + MAXHEIGHT)
}

else if ((weight < MINWEIGHT) || (weight > MAXWEIGHT))
{
  alert("weight must be between " + MINWEIGHT + "and" + MAXWEIGHT)
}
else {
  let bmi = (weight / (Math.pow(height, 2)) * 703)
  setBmi(bmi.toFixed(2))

if (bmi < 18.5)
{
  setMessage("UnderWeight")
}
else if (bmi < 25.0)
{
  setMessage("Optimal weight")
}
else if (bmi < 30.0)
{
  setMessage("overweight")
}
else if (bmi >= 30.0)
{
  setMessage("obese")
}

let imgSrc

if(bmi < 1)
{
  imgSrc = null
}
else if (bmi < 18.5)
{ 
  imgSrc = require('')
}
else if (bmi < 25.0)
{
  imgSrc = require('')
}
else if (bmi < 30.0)
{
  imgSrc = require('')
}
else if (bmi >= 30.0)
{
  imgSrc = require('')
}

}
}
let reload = () => {
  window.location.reload()
}
let imgSrc
return (
  <div className="App">
    <div className='container'>
      <h2>React BMI Calculator</h2>
      <form onSubmit={calculateBMI()}>
        <div>
        {/* evt Stands for event */}
          <label>Height (12 - 96)</label>
          <input value={height} onChange={(evt => setHeight(evt.target.value))}></input>
        </div>
        <div>
          <label>Weight (1 - 777)</label>
          <input value={weight} onChange={(evt => setWeight(evt.target.value))}></input>
        </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn' type='reset' onClick={reload()}>Clear</button>
        </div>
      </form>
      <div>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </div>
      <div className='img-container'>
        <img src={imgSrc} alt="Body Type Image"/>
      </div>
    </div>
  </div>
);
}

export default App;