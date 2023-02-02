import { DiJavascript } from 'react-icons/di'

import './App.css'

function App() {
  return (
    <div className="App">

      <BioCard
        imgSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        name="Lars Gunnar"
        short="Some fancy descript short text"
      >

        {/* Skill Icons here */}
        <DiJavascript size={30} />
        <DiJavascript size={30} />

      </BioCard>

    </div>
  )
}

export default App


function BioCard(props) {
  console.log(props)

  return (
    <div className='bio-card'>
      <img className='picture' src={props.imgSrc} alt="" />

      <div className='description'>
        <h3>Name: <span>{props.name}</span></h3>
        <h3>Short: <span>{props.short}</span></h3>
      </div>

      <div className='skill-badges'>
        {props.children}
      </div>
    </div>
  )
}