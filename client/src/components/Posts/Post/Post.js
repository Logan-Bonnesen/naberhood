import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Icon } from '@material-ui/core';
// import ThumbUpAltIcon from '@material-ui/core';
import DeleteIcon from '@material-ui/core';
// import Icon from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles'

const Post = ({ post, setCurrentId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card>
            <CardMedia className={classes.media} image={post.selectedFile || 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'} />
            <div>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                {/* fix icon/morehorizicon issue */}
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><Icon fontSize='default'/></Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2" >{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {/* add <ThumbUpAltIcon fontSize="small" /> functionality */}
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}> Like {post.likeCount} </Button>
                {/* add <DeleteIcon fontSize="small" /> functionality */}
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}> Delete</Button>
            </CardActions>
        </Card>
    );
}

export default Post;