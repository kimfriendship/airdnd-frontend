import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../style/theme';

// btnType: color, underlined, circle, oval
const Button = ({
  children,
  btnType,
  color,
  border,
  width,
  height,
  fontSize,
  hover,
  padding,
  focus,
  transition,
  type,
  ...rest
}) => {
  return (
    <StBtn
      btnType={btnType}
      color={color}
      border={border}
      width={width}
      height={height}
      fontSize={fontSize}
      hover={hover}
      padding={padding}
      focus={focus}
      transition={transition}
      type={type || 'button'}
      {...rest}
    >
      {children}
    </StBtn>
  );
};

const hovers = btnType => {
  switch (btnType) {
    case undefined:
    case 'underlined':
      return css`
        background: ${theme.lightGray};
      `;
    case 'oval':
      return css`
        border: 1px solid ${theme.black};
      `;
    case 'circle':
      return css`
        border-radius: 50%;
      `;
    default:
      return null;
  }
};

const borders = btnType => {
  switch (btnType) {
    case 'color':
    case 'underlined':
      return css`
        border: none;
      `;
    case 'oval':
      return css`
        border: 1px solid ${theme.gray};
        border-radius: 30px;
      `;
    case 'circle':
      return css`
        border-radius: 50%;
      `;
    default:
      return css`
        border: 1px solid ${theme.black};
      `;
  }
};

const hoverStyles = css`
  ${({ btnType, hover }) =>
    css`
      &:hover {
        ${hover ? hover : hovers(btnType)};
      }
    `}
`;

const borderStyles = css`
  ${({ btnType, border }) => css`
    ${borders(btnType)};
    border: ${border && border};
  `}
`;

const fontStyles = css`
  ${({ btnType, fontSize }) => css`
    font-size: ${fontSize || '1.6rem'};
    text-decoration: ${btnType === 'underlined' && 'underline'};
  `}
`;

const colorStyles = css`
  ${({ color }) =>
    color &&
    css`
      background: ${theme[color] || 'transparent'};
      color: ${theme.white};
      border: none;
    `}
`;

const sizeStyles = css`
  ${({ btnType, width, height, padding }) => css`
    width: ${btnType === 'circle' ? '32px' : width};
    height: ${btnType === 'circle' ? '32px' : height};
    padding: ${btnType === 'circle' ? '0' : padding};
  `}
`;

const focusStyles = css`
  ${({ focus }) =>
    focus &&
    css`
      &:focus {
        box-shadow: 0px 0px 0px 2px ${theme.white},
          0px 0px 0px 4px ${theme.black};
      }
    `}
`;

const transformStyles = css`
  ${({ transition }) =>
    transition &&
    css`
      transition: 0.2s;
      &:active {
        transform: scale(${props => props.transScale || '0.94'});
      }
    `}
`;

export const StBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  padding: ${props => props.padding || '1rem 2rem'};
  font-weight: ${props => props.weight || '400'};
  overflow: hidden;
  ${fontStyles};
  ${colorStyles};
  ${sizeStyles};
  ${borderStyles};
  ${hoverStyles};
  ${focusStyles};
  ${transformStyles};
`;

export default Button;
