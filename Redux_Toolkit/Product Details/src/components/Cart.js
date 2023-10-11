import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useSelector, useDispatch } from "react-redux";
import { remove } from '../Store/cartSlice';



const Cart = () => {
    const cartItems = useSelector((state) => state.cart)
    // const addToBag = JSON.stringify(cartItems)
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        //dispatch action to remove
        dispatch(remove(id))
    }

    const addToBag = cartItems.map(product => {
        return (
            <div className="col-md-12" style={{ marginBottom: '10px' }}>
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
                            <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>

            </div>
        )

    })
    return (
        <div>
            <h1>Cart</h1>
            {addToBag}
        </div>
    )
}
export default Cart;