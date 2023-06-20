import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/product');
    }

    return <>
    <h1>Hello World</h1>
    <p>
        Go to <Link to='/product'>list product</Link>
    </p>
    <p>
        <button onClick={navigateHandler}>Navigate</button>
    </p>
    </>
}

export default Home;