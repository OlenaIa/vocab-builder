import { FC } from "react";
import { SectionTemplate } from "../SectionTemplate/SectionTemplate";
import { HeaderContainer } from "./Header.styled";
import { Logo } from "../Logo/Logo";

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <SectionTemplate>
                <Logo/>
            </SectionTemplate>
        </HeaderContainer>
    );
};