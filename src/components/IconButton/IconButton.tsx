import React from 'react';
import { useStyle } from '../../styles';
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
}) => {
  const { palette } = useStyle();
  return (
    <StyledButton
      onClick={onClick}
      palette={palette}
    >
      <IconComponent
        title={alt}
        size={36}
      />
    </StyledButton>
  );
};
