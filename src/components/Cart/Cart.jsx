

import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles.js';
import CartItem from './CartItem/CartItem.jsx';

const Cart = ({ cart }) => {
    
    const isEmpty = !cart.line_items;
    const classes=useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in your shopping cart, start adding some!</Typography>
    );

    const FilledCart = () => (
        <div>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    SubTotal: { cart.subtotal.formatted_width_symbol }
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                </div>
            </div>
        </div>
    );

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }
        </Container>
    );
};

export default Cart;
