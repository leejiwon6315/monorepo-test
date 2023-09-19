('use client');

import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
}

export const Button = ({ children, color }: Props) => {
  return <ButtonTag color={color}>{children}</ButtonTag>;
};

const ButtonTag = styled('button')<Pick<Props, 'color'>>`
  background-color: ${({ color }) => color || 'white'};
  color: ${({ color }) => (color ? 'white' : 'black')};
`;
