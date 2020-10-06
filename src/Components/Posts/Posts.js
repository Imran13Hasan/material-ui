import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';

const Posts = (props) => {

    const { userId, id, body, title } = props.data;
    // const {url} = props.pic;

    const history = useHistory();
    const handleClick = (link) => {
        history.push(`/details/${link}`)
    }


    const [picture, setPicture] = useState([]);
    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=2&limit=100')
            .then(res => res.json())
            .then(data => setPicture(data))
    }, [])

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => handleClick(id)} size="small" color="primary">
                    See More
                </Button>
            </CardActions>
        </Card>
    );
};

export default Posts;