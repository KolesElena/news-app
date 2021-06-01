import React, { useState } from 'react';
import LeftBlock from '../Left-block/Left-block';
import RightBlock from '../Right-block/Right-block';
import { LayoutStyled } from './Layout.styled';

const Layout = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [readArticles, setReadArticles] = useState([]);

    const onArticleSelect = (article) =>{ 
        setSelectedArticle(article);

        if(!readArticles.some(readArticle => readArticle.url === article.url)) {
            setReadArticles([ ...readArticles, article ]);
        }
    };

    return (
        <LayoutStyled>
            <LeftBlock onArticleSelect={onArticleSelect} readArticles={readArticles} />
            <RightBlock article={selectedArticle} />
        </LayoutStyled>
    );
};

export default Layout;