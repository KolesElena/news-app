import styled from 'styled-components';
import { tablet } from '../../styles/breakpoints';

export const List = styled.ul`
    padding: 0;
    margin: 0;
`;

export const ArticleStyled = styled.div`

    ${tablet} {
        display: flex;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        margin-bottom: 1rem;
        padding: 1rem;
    }
`;

export const ImgBox = styled.div`
    flex: 40%;
    margin-right: 1rem;
    width: 100%;
    padding-top: 56.25%; 
    position: relative;
`;

export const Image = styled.img`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    object-fit: cover;
    height: 50%;
    max-height: 125px;
`;

export const Text = styled.div`
    flex: 60%;
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 1rem;
`;

export const Meta = styled.div`
    display: flex;
    color: #979797;
    margin-top: 1rem;
`;

export const Author = styled.span`
    flex: 50%;
    font-weight: bold;
    overflow-wrap: anywhere;
`;

export const Date = styled.span`
    flex: 50%;
    text-align: right;
`;