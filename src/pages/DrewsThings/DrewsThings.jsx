import { Link } from "react-router-dom";
import ThingCard from "../../components/ThingCard/ThingCard";

const DrewsThings = (props) => {
  console.log(props.things)
  return ( 
    <>
      <h1>Drew's Things</h1>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  );
}

export default DrewsThings;