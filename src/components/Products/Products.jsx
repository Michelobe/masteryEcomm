import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product.jsx';
import useStyles from './styles.js';

const products = [
    { 
        id: 1, 
        name: 'Shoes', 
        description: 'Running shoes', 
        price: '$5', 
        image: 'https://www.hoka.com/dw/image/v2/BDJD_PRD/on/demandware.static/-/Sites-HOKA-US-master/default/dw14f1b0ee/images/transparent/1113513-WEPR_1.jpg?sw=414&sfrm=png&q=0&bgcolor=FFFFFF' 
    },
    { 
        id: 2, 
        name: 'Macbook', 
        description: 'Apple Macbook', 
        price: '$10', 
        image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg' 
    },
];

const Products = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
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