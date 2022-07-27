import styled, { css } from "styled-components";

type StyledTextBackground = {
    variant?: "front" | "back";
}

export const StyledTextBackground = styled.p<StyledTextBackground>`
    position: absolute;
    font-size: 300px;
    font-weight: bold;
    opacity: 0.05;
    z-index: 5;
    user-select: none;

    ${(props) => {
        if(props.variant === 'front'){
            return css`
                left: 0;
                right: 300px;
                bottom: -100px;
            `
        }

        if(props.variant === 'back'){
            return css`
                right: 0;
                left: 600px;
                top: -100px;
            `
        }

    }}
`;
