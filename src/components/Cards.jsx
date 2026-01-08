import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ( {id,title,description,image,price,rating} ) => {
   
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>

                <Card.Text>
                    {price}
                </Card.Text>

                <Card.Text>
                    {rating.rate}
                </Card.Text>
                <Button variant="outline-dark">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards