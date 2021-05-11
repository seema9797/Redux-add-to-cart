import logo from './logo.svg';
import './App.css';
import {CardDeck,Card} from 'react-bootstrap'
function App() {
  return (
    <CardDeck className="container mt-4 ">
  <Card>
    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.xhWXcD164DKv-MxzqRevNwAAAA?pid=ImgDet&rs=1" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://th.bing.com/th/id/R39cf3cb0adb110fb2e6201f3adb85300?rik=F888nlaVHstICA&riu=http%3a%2f%2fimages.flip-phone.biz%2fl-m%2fnew-go-flip-cell-phone-black.jpg&ehk=7BnB8j3yu2JnEpWwxv2ZQUYBe1d%2b5UxGN77YTVb2jFw%3d&risl=&pid=ImgRaw" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://th.bing.com/th/id/R57d5501e3a7758db9a73a67b1baadfce?rik=tX19gEVcBxK9qw&riu=http%3a%2f%2ftarget.scene7.com%2fis%2fimage%2fTarget%2f51446446%3fwid%3d360%26hei%3d360%26qlt%3d80%26fmt%3dpjpeg&ehk=qGNG5CdD1tPEzetkNNVdfxXcW8J83QqDDhSD53aLTnA%3d&risl=&pid=ImgRaw" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
  );
}

export default App;
