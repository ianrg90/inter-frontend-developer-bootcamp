import styled, {css} from 'styled-components';

export const CardContainer = styled.div<{
    width: string;
    height: string;
    noShadow: boolean;
    noBorder: boolean
}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: ${({theme}) => theme.colors.background};
    ${props => !props.noShadow && css`
       box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
    `}
    ${props => !props.noBorder && css`
        border: 1px solid ${({theme}) => theme.colors.primary};
    ` }

    border-radius: 20px;
    padding: 20px;
    display:flex;
    align-items: center;
    flex-direction: column;
    z-index: 5000;
`