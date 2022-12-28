import { render, screen } from '@testing-library/react';
import { Question } from '../Question';
import { messages } from '../steps/messages';
import { FeedbackState } from '../../../state/FeedbackContext/reducer';
import { FeedbackContext } from '../../../state/FeedbackContext';
import { BrowserRouter } from 'react-router-dom';

const renderQuestion = (state: FeedbackState) =>
  render(
    <FeedbackContext.Provider value={{ state, dispatch: jest.fn() }}>
      <BrowserRouter>
        <Question />
      </BrowserRouter>
    </FeedbackContext.Provider>
  );

describe('Question', () => {
  it('should render Home for step 1', () => {
    renderQuestion({ step: 1 });

    expect(screen.getByText(messages.home)).toBeInTheDocument();
  });

  it('should render Rate for step 2', () => {
    renderQuestion({ step: 2 });

    expect(screen.getByText(messages.rate)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(5);
  });

  it('should render Comment for step 3', () => {
    renderQuestion({ step: 3 });

    expect(screen.getByText(messages.comment)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
