import React  from 'react';
import { formatDate } from '../../common/utils/date';
import { FullArticleStyled, Header } from './Full-article.styled';
import { Text, ImgBox, Image, Title, Meta, Author, Date } from '../Article/Article.styled';


const FullArticle = ({ article }) => {
    return (
        <FullArticleStyled data-testid="details-box">
            <Header>
                <ImgBox>
                    <Image alt ='' src={article.urlToImage}/>
                </ImgBox>
                <Text>
                    <Title>{article.title}</Title>
                    <Meta>
                        <Author>{article.author}</Author>
                        <Date>{formatDate(article.publishedAt)}</Date>
                    </Meta>
                </Text>
            </Header>
            <div>{article.content}</div>
        </FullArticleStyled>
    )
}

export default FullArticle;