('use client');

import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
}

export const ReactButton = ({ children, color }: Props) => {
  return <Button color={color}>{children}</Button>;
};

const Button = styled('button')<Pick<Props, 'color'>>`
  background-color: ${({ color }) => color || 'white'};
  color: ${({ color }) => (color ? 'white' : 'black')};
`;
