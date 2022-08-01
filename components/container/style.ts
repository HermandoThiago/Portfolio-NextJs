import styled, { css } from "styled-components";

interface IStyledContainer {
    color?: string;
}

export const StyledContainer = styled.div<IStyledContainer>`
    max-width: 1280px;
    margin: 0 auto;
    background-color: ${(props) => props.color};
`;
