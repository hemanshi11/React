import React from 'react';
import './Home.css';
import Image2 from '../../Images/images2.jpeg';
import Image6 from '../../Images/images6.jpeg';
import Image4 from '../../Images/images4.jpeg';
import Image7 from '../../Images/images7.jpeg';
import Image8 from '../../Images/images8.jpg';
import Image12 from '../../Images/img12.jpg';
// import Imgrow from '../../Images/imgrow2.png';



// import Image2 from '../../Images/images2.jpeg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <>
    <div className='product'>

      <Card className="cards">
        <Card.Img variant="top" className='img' src={Image2} />
        <Card.Body className='card-body'>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary ">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Img variant="top" className='img' src={Image6} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Img variant="top" className='img' src={Image4} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Img variant="top" className='img' src={Image7} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Img variant="top" className='img' src={Image8} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Img variant="top" className='img' src={Image12} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Img variant="top" className='img' src={Image12} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="cards">
        <Card.Img variant="top" className='img' src={Image2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}
