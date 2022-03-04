import styled from 'styled-components';

export const CardStyled = styled.div`
    -webkit-column-count: 3;
    -moz-column-count: 3;
    -column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    padding: 0 12px;
    margin: 15px 10px;
    border-radius: 16px;
    min-width: 720px;

@media(max-width: 991px) {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    -column-count: 2;
}
`;

export const Image = styled.img`
    width:100%;
    margin: 15px 10px;
    border-radius: 16px;
`;

export const ButtonMore = styled.button`
    width: 45px;
    height: 45px;
    position: fixed;
    bottom: 12px;
    right: 12px;
    border-radius: 50%;
    font-size: 24px;
`;

export const ButtonQuestion = styled.button`
    width: 45px;
    height: 45px;
    position: fixed;
    bottom: 70px;
    right: 12px;
    border-radius: 50%;
    font-size: 24px;
`;