import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyProducts = [{
  id: 'p1', title: 'Book', price: 5, description: 'Novel'
},
{
  id: 'p2', title: 'Vegetables', price: 10, description: 'Dinner'
},
{
  id: 'p3', title: 'keyboard', price: 20, description: 'wireless'
}];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
