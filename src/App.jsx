// Assets
import profileSampleMale from './assets/images/profile-sample-male.avif'

// Icons
import { DiJavascript } from 'react-icons/di'

// Components
import BioCard from './components/BioCard/BioCard'

import data from './data/developers'

function PersonCard(props) {
  return (
    <li>
      <h4>{props.name}</h4>
      <a href="www.example.com">Example</a>
    </li>
  )
}

function App() {
  return (
    <div className="App">

      <ul>
        {
          data.map(
            (name, index) => <PersonCard key={index} name={name}/>)
        }
      </ul>

    </div>
  )
}

export default App