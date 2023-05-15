import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY = [
  {
    id: 'p1',
    price: 8,
    title: 'My First Book',
    description: 'this is my first book'
  },
  {
    id: 'p2',
    price: 6,
    title: 'My Second Book',
    description: 'this is my second book'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY.map(item => (
          <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
