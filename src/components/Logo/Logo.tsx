import { FC } from "react";
import { LogoContainer, IconWrapper, LogoText } from "./Logo.styled";
import spriteColor from '../../assets/spriteColor.svg';

export const Logo: FC = () => {
    return (
                <LogoContainer>
                    <IconWrapper>
                        <use href={`${spriteColor}#icon-logo`} />
                    </IconWrapper>
                    <LogoText>VocabBuilder</LogoText>
                </LogoContainer>
    );
};