/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../Store/cartSlice'
import { getProducts } from "../Store/productSlice";

const Product = () => {
    // const [products, setProducts] = useState([])

    const dispatch = useDispatch()
    const { data: products } = useSelector(state => state.products)

    useEffect(() => {
        //api
        // fetch("https://fakestoreapi.com/products")
        //     .then((response) => response.json())
        //     .then((result) => setProducts(result))

        //dispatch the actions
        dispatch(getProducts());
    }, [dispatch])

    const addToCart = (product) => {
        //dispatch add action
        dispatch(add(product))
    }

    // const product = JSON.stringify(products)
    const cards = Array.isArray(products) ? (products.map((product) => {
        return (
            <div className="col-md-3" style={{ marginBottom: '10px' }}>
                <Card key={product.id} className='h-30'>
                    <div className="text-center" >
                        <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
                    </div>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                        <Card.Footer style={{ background: 'white' }}>
                            <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>

            </div>
        )

    })) : null;
    return (
        <div>
            <h1>Product Dashboard</h1>
            <div className="row">            {cards}
            </div>
        </div>
    )
}

export default Product;