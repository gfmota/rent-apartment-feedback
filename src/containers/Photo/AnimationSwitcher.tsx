import React from 'react';
import { StyledFadeIn, StyledFadeOut } from './styled';

interface AnimationSwitcherProps extends React.PropsWithChildren {
  willUnmount: boolean;
}

const AnimationSwitcher: React.FC<AnimationSwitcherProps> = ({
  children,
  willUnmount
}) => {
  const SelectedAnimation = willUnmount ? StyledFadeOut : StyledFadeIn;

  return <SelectedAnimation>{children}</SelectedAnimation>;
};

export default AnimationSwitcher;
