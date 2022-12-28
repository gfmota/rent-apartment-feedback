import styled from 'styled-components';

export const StyledFeedbackWrapper = styled.div`
  padding-top: calc(${() => (window.innerWidth * 260) / 375}px + 2em);

  height: ${() => window.innerHeight}px;
`;
