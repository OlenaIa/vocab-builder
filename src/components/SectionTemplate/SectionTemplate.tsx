import { FC, ReactElement } from 'react';
import { Section, Container } from './SectionTemplate.styled';
// import { useLocation } from 'react-router-dom';

interface Props {
    children?: ReactElement
};

export const SectionTemplate: FC<Props> = ({ children }) => {
    //   const location = useLocation();

    return (
        <Section
        //   pathname={location.pathname}
        >
            <Container>{children}</Container>
        </Section>
    );
};