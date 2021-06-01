import React from 'react';
import NewsList from '../News-list/News-list';
import { LeftBlockStyled } from './Left-block.styled';

const LeftBlock = ({ onArticleSelect, readArticles }) => {
    
    return (
        <LeftBlockStyled>
            <NewsList onArticleSelect={onArticleSelect} readArticles={readArticles} />
        </LeftBlockStyled>
    )
}

export default LeftBlock;