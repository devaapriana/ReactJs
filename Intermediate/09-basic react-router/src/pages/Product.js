import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
    {id: 'p1', name: 'Product 1'},
    {id: 'p2', name: 'Product 2'},
    {id: 'p3', name: 'Product 3'},
]
const Product = () => {
    return <>
    <h1>Product pages</h1>
    <ul>
    {DUMMY_PRODUCTS.map(prod => <li key={prod.id}><Link to={`/product/${prod.id}`}>{prod.name}</Link></li>)}
    </ul>
    </> 
}

export default Product;