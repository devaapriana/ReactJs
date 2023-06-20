import { Link } from "react-router-dom";

const Home = () => {
    return <>
    <h1>Hello World</h1>
    <p>
        Go to <Link to='/product'>list product</Link>
    </p>
    </>
}

export default Home;