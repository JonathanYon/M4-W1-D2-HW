
import {Nav} from "react-bootstrap"

const MyNavBar = () => (
    <Nav variant="pills" defaultActiveKey="/home" className="bg-dark">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="link-1">Browse</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="link-1">About</Nav.Link>
    </Nav.Item>
  </Nav>
)

export default MyNavBar