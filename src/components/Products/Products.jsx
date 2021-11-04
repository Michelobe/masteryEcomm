import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product.jsx';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: '' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10', image: '' },
];

const Products = () => {
    return(
        <main>
            <Grid container justifyContent='center' spacing={4}>
                {products.map((products) => (
                    <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={products} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;