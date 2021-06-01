import React from 'react';
import FullArticle from '../Full-article/Full-article';
import { RightBlockStyled } from './Right-block.styled';

const RightBlock = ({ article }) => {
    return (
        <RightBlockStyled>
            {article && <FullArticle article={article} />}
        </RightBlockStyled>
    )
}

export default RightBlock;