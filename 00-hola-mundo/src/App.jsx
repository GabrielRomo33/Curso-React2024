import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    initialisFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    initialisFollowing: true,
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    initialisFollowing: false,
  },
  {
    userName: 'vxnder',
    name: 'Vanderhart',
    initialisFollowing: false,
  },
];


function App() {

  return (
    <section className='App'>
      {/* <TwitterFollowCard initialisFollowing={true} userName={'midudev'} name={'Miguel Angel Duran'}/> */}
      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard key={userName} userName={userName} initialisFollowing={isFollowing} name={name} />
        ))
      }
    </section>
  )
}

export default App
