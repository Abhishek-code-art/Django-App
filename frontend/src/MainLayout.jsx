import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MainLayout = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:8000/`)
            .then(response => {
                console.log('Fetched articles:', response.data);
                setArticles(response.data);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }



    return (
        <div>
            {articles.message}
        </div>
    );
};


export default MainLayout;