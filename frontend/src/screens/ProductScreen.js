import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Col, Row, Image, Card, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'


const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params._id}`)
            setProduct(data)
        }
        getProduct();
    }, [match]);

    return (
        <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                   Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                   Description: ${product.description}
                </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock > 0 ? false : true }>Add to card</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        {/* <Card>
            <Card.Img src={product.image}></Card.Img>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
        </Card> */}
        </>
    );
}

export default ProductScreen;