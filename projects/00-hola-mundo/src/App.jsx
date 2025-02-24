import './App.css'
import TwitterFollowCard from './TwitterFollowCard.jsx'

function App () {
  // const formatUserName = (userName) => `@${userName}`

const users = [
  {
    id: 1,
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
  },
  {
    id: 2,
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  },
  {
    id: 3,
    userName: 'pheralb',
    name: 'Pedro Hernández',
    isFollowing: false
  },
  {
    id: 4,
    userName: 'vxnder',
    name: 'Victor García',
    isFollowing: false
  },
]

  return (
    <section className="App">
      {
        users.map(({ id, userName, name, isFollowing}) => (
            (
              <TwitterFollowCard
                key={id}
                userName={userName}
                initialIsFollowing={isFollowing}>
                {name}
              </TwitterFollowCard>
            )
          )
        )
      }
    </section>
  )
}

export default App;
