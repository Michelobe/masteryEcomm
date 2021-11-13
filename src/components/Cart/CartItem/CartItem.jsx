import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';
import { mergeClasses } from '@material-ui/styles';

const CartItem = ({ item }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h3'>{item.price.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    );
};

export default CartItem;
