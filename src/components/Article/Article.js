import React from 'react';
import { ArticleStyled, ImgBox, Image, Text, Title, Description, Meta, Author, Date } from './Article.styled';


const Article = ({ id, urlToImage, title, shortDescription, author, onClick, read, date }) => {

    return (
        <ArticleStyled id={id} onClick={onClick}>
            <ImgBox><Image alt='' src={urlToImage}/></ImgBox>
            <Text>
                <Title>{title}</Title>
                <Description>{shortDescription}</Description>
                <Meta>
                    <Author>{author}</Author>
                    <Date >{date}</Date>
                </Meta>
            </Text>
            <div>{read ? 'Read' : 'Unread'}</div>
        </ArticleStyled>
        )
}

export default Article;