// Assets
import profileSampleMale from './assets/images/profile-sample-male.avif'

// Icons
import { DiJavascript } from 'react-icons/di'

// Components
import BioCard from './components/BioCard/BioCard'

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

      <BioCard
        imgSrc={profileSampleMale}
        name="Lars Gunnar"
        short="Some fancy descript short text"
      >

        {/* Skill Icons here */}
        <DiJavascript size={30} />
        <DiJavascript size={30} />

      </BioCard>

      <div className='placeholder'></div>

    </div>
  )
}

export default App