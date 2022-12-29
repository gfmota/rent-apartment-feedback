import styled from 'styled-components';
import { StyledDefaultProps } from '../../styles';

interface StyledStepProps extends StyledDefaultProps {
  selected: boolean;
}

export const StyledStep = styled.div<StyledStepProps>`
  border-radius: 100%;
  border: solid 3px
    ${({ selected, palette }) =>
      selected ? palette.primary.main : palette.primary.light};
  height: ${({ selected }) => (selected ? '1em' : '.5em')};
  width: ${({ selected }) => (selected ? '1em' : '.5em')};
  background-color: ${({ selected, palette }) =>
    selected ? palette.primary.main : 'inhrit'};
  transition: all 1s;
  margin: 0 0.2em;
`;

export const StyledStepsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 2em;
  min-width: 50%;
`;
