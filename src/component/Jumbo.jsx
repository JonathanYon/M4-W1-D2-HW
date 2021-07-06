import {Jumbotron} from "react-bootstrap"
const Jumbo = () => ( 
  <Jumbotron>
    <h1 className="display-4">Welcome to our Shop </h1>
    {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
    <hr className="my-4"></hr>
    <p>Find the best Fantasy books out there.</p>
    <a className="btn btn-primary btn-lg" href="#button" role="button">Learn more</a>
  </Jumbotron>
)
export default Jumbo