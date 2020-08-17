import React from 'react';
import styled, { css } from 'styled-components';

const Carousel = ({ size, ...rest }) => {
  return (
    <StWrapper size={size} {...rest}>
      <StBadge>슈퍼호스트</StBadge>
      <StImageList>
        <StImageWrapper size={size}>
          <StImage src="https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large" />
        </StImageWrapper>
        <StImageWrapper size={size}>
          <StImage src="https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large" />
        </StImageWrapper>
        <StImageWrapper size={size}>
          <StImage src="https://a0.muscache.com/im/pictures/2013c2de-4727-4cd9-b9cd-77d85238d440.jpg?aki_policy=large" />
        </StImageWrapper>
        <StImageWrapper size={size}>
          <StImage src="https://a0.muscache.com/im/pictures/a3912086-e317-4913-ab09-fb38e2737ee5.jpg?aki_policy=large" />
        </StImageWrapper>
        <StImageWrapper size={size}>
          <StImage src="https://a0.muscache.com/im/pictures/3276d8ad-d455-4c59-923c-3f6926301a93.jpg?aki_policy=large" />
        </StImageWrapper>
      </StImageList>
      <StCircleWrapper>
        <StCircle color="lightGray" />
        <StCircle color="gray" />
        <StCircle color="gray" />
        <StCircle color="gray" />
        <StCircle color="gray" />
      </StCircleWrapper>
    </StWrapper>
  );
};

const sizes = {
  large: {
    width: '300px',
    height: '200px',
  },
  medium: {
    width: '270px',
    height: '180px',
  },
  small: {
    width: '148px',
    height: '105px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
  `}
`;

const StWrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 8px;
  background: pink;
  /* overflow: hidden; */

  ${sizeStyles};
`;

const StBadge = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.lightGray};
  border-radius: 3px;
  padding: 0.2rem 0.8rem;
  font-size: 1.3rem;
  font-weight: 600;
  top: 1rem;
  left: 1rem;
`;

const StCircleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StCircle = styled.div`
  margin: 1rem 0.3rem;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ color, theme }) => theme.color[color]};
`;

const StImageList = styled.ul`
  display: flex;
`;

const StImageWrapper = styled.li`
  ${sizeStyles};
`;

const StImage = styled.img`
  object-fit: cover;
  width: inherit;
  height: inherit;
`;

export default Carousel;
