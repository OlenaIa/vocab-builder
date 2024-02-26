import styled from 'styled-components';

export const LogoContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const IconWrapper = styled.svg`
    width: 36px;
    height: 36px;

    @media screen and (min-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;

export const LogoText = styled.p`
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: 0em;

    @media screen and (min-width: 768px) {
        font-size: 22px;
        line-height: 1.46;
    }
`;