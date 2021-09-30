import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=8702d04648ec48eea36b3fe31703b219')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    articles.map(article => <Grid item xs={2} sm={4} md={4}>
                        <News article={article}></News>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Newspaper;