import { render, screen } from '@testing-library/react';
import { Steps } from '../Steps';
import { useFeedbackSteps } from '../../../hooks';
import { STEPS_LENGTH } from '../../../hooks/useFeedbackSteps';

jest.mock('../../../hooks');

describe('Steps', () => {
  beforeEach(() =>
    (useFeedbackSteps as jest.Mock).mockReturnValue({ currentStep: 2 })
  );

  it('should render correctly', () => {
    render(<Steps />);

    expect(screen.getAllByTestId('step')).toHaveLength(STEPS_LENGTH);
  });

  it('should render current step selected', () => {
    render(<Steps />);
    const steps = screen.getAllByTestId('step');

    expect(steps[0]).toHaveStyle('background-color: black');
    expect(steps[1]).toHaveStyle('background-color: white');
    expect(steps[2]).toHaveStyle('background-color: black');
  });
});
