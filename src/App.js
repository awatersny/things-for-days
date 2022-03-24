import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ManliestThings from './pages/ManliestThings/ManliestThings'
import DevonsThings from './pages/DevonsThings/DevonsThings'
import FunctionalThings from './pages/FunctionalThings/FunctionalThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import Landing from './pages/Landing/Landing'
import DrewsThings from './pages/DrewsThings/DrewsThings'

const App = () => {
  const [shahzadsThings, setShazadsThings] = useState([
    {
      name: 'functional programming',
      image: 'https://imgs.xkcd.com/comics/functional.png',
      attributes: ['efficient', 'reusability', 'not a taco', 'beautiful'],
    },
    {
      name: 'React hooks',
      image:
        'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      attributes: [
        'useEffect',
        'useState',
        'not a taco',
        "state's best friend",
      ],
    },
    {
      name: 'BluBlockers',
      image:
        'https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584',
      attributes: [
        'very attractive',
        'useful probably!',
        'good for viewing tacos',
        'such hip',
        'worn by all the cool kids',
      ],
    },
    {
      name: 'Healthy food',
      image: 'https://i.imgur.com/gRxOxsA.jpg',
      attributes: [
        'makes you live a long time',
        'consistent poops',
        'probably tacos sometimes!',
        'farm to market',
      ],
    },
  ])

  const [bootsThings, setBootsThings] = useState([
    {
      name: 'Boots',
      image:
        'https://i.imgur.com/EjfV0Hn.png',
      attributes: [
        'brown',
        'leather',
        'ropers',
        'made for walking',
        'something to add',
      ],
    },
  ])

  const [devonsThings, setDevonsThings] = useState([
    {
      name: 'Dfam',
      
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-422c8cf6c045306c__hmac-6e8bfef76aed8d706affee5aef63bb6ecd063be5/images/items/750/DFAM-large.jpg.auto.webp',

      attributes: [
        'has knobs',
        'is drum synth'
        
      ],
    },
    {
      name: 'M-32',
      
      image: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-e329b463c6de0d7d__hmac-2410ab8ca5c3ee2298bef30a1b283e8ec1abd29d/images/items/750/Mother32-large.jpg.auto.webp',

      attributes: [
        'has knobs',
        'is subtractive monophonic synth'
        
      ],
    },
  ])

  const [davidsThings, setDavidsThings] = useState([
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'giraffe',
      image:
        'https://images.unsplash.com/photo-1538127426967-75a6c73f6d20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      attributes: [
        'tall',
        'cool',
        'fun',
        'animal',
        "(David doesn't acually own a giraffe)",
      ],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ])

  const [huntersThings, setHuntersThings] = useState([
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/functional.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ])

  const [drewsThings, setDrewsThings] = useState([
    {
      name: "Nintendo Switch",
      attributes: ["bricked", "needs repair"]
    }
  ])

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-functional-things"
        element={<FunctionalThings things={shahzadsThings} />}
      />
      <Route
        path="/the-boots-things"
        element={<ManliestThings things={bootsThings} />}
      />
      <Route
        path="/devons-things"
        element={<DevonsThings things={devonsThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
      <Route
        path="/the-drew-things"
        element={<DrewsThings things={drewsThings} />}
      />
    </Routes>
  )
}

export default App
