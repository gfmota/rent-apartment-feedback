import React from 'react';
import { StyledButton } from './styled';

interface IconButtonProps {
  IconComponent: React.FC<{
    title: string;
    size?: number;
  }>;
  alt: string;
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  IconComponent,
  alt,
  onClick
}) => (
  <StyledButton onClick={onClick}>
    <IconComponent
      title={alt}
      size={36}
    />
  </StyledButton>
);
