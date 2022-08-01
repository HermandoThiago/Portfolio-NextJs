import styled, { css, keyframes } from "styled-components";

type StyledTextBackground = {
    variant?: "front" | "back";
}

const animateTransformFront = keyframes`
    from{
        opacity: 0;
        transform: translate(-4rem, 0);
    }

    to{
        opacity: 0.05;
        transform: translate(0, 0);
    }
`;

const animateTransformBack = keyframes`
    from{
        opacity: 0;
        transform: translate(4rem, 0);
    }

    to{
        opacity: 0.05;
        transform: translate(0, 0);
    }
`;

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
                left: 0px;
                right: 400px;
                bottom: 0px;
                animation: ${animateTransformFront} 1s linear;
            `
        }

        if(props.variant === 'back'){
            return css`
                right: 0px;
                left: 700px;
                top: 0px;
                animation: ${animateTransformBack} 1s linear;
            `
        }

    }}
`;
