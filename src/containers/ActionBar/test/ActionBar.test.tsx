import { render, screen } from '@testing-library/react';
import { useFeedbackSteps } from '../../../hooks';
import { ActionBar } from '../ActionBar';

jest.mock('../../../hooks')

describe('ActionBar', () => {
  it('should render correctly', () => {
    (useFeedbackSteps as jest.Mock).mockReturnValue({
      isBackButtonEnabled: true
    });
    render(<ActionBar />);

    expect(screen.getByTestId('Steps')).toBeInTheDocument();
    expect(screen.getByTitle('Próximo')).toBeInTheDocument();
    expect(screen.getByTitle('Voltar')).toBeInTheDocument();
  });

  it('shouldnt render back button according to hook', () => {
    (useFeedbackSteps as jest.Mock).mockReturnValue({
      isBackButtonEnabled: false
    });
    render(<ActionBar />);

    expect(screen.queryByTitle('Voltar')).not.toBeInTheDocument();
  });
});
