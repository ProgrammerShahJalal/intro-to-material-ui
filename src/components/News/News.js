import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const News = (props) => {
    const { title, description, urlToImage, publishedAt } = props.article;
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={title}
                subheader={publishedAt}
            />
            <CardMedia
                component="img"
                height="194"
                image={urlToImage}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>

    );
};

export default News;