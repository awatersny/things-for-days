import ThingCard from '../../components/ThingCard/ThingCard'


import { Link } from 'react-router-dom'

const DevonsThings = (props) => {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Devon's Things</h1>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}
 
export default DevonsThings