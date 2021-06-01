import React, { useState, useEffect } from 'react';
import Article from '../Article/Article';
import { List } from './New-list.styled';
import { formatDate } from '../../common/utils/date';
import getArticles from '../../services/articles';

const NewsList = ({ onArticleSelect, readArticles }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        getArticles(page).then(({ articles }) => setNews(articles)).finally(() => setLoading(false));
    }, [page]);

    return loading
     ? <div>Loading</div>
     : (
        <List>
            <section>
                {news.map((article) => {
                    const shortDescription = article.description.length > 120 ? `${article.description.substring(0,120)}...` : article.description;
                    const hasBeenRead = readArticles.some(readArticle => readArticle.url === article.url);

                    return (
                        <Article
                            key = {article.url}
                            id={article.url}
                            read={hasBeenRead}
                            urlToImage = {article.urlToImage}
                            title = {article.title}
                            shortDescription = {shortDescription}
                            author={article.author}
                            date = {formatDate(article.publishedAt)}
                            onClick={() => onArticleSelect(article)}
                        />
                    );
                })}
            </section>
            <div onClick={() => setPage(page - 1)}>Prev page</div>
            <div onClick={() => setPage(page + 1)}>Next page</div>
        </List>
    )
}

export default NewsList;

