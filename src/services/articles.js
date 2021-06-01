import axios from 'axios';

const getArticles = page => axios.get('http://0.0.0.0:8000/v1/news?page=' + page).then(res => res.data);

export default getArticles;