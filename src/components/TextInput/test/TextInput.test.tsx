import { fireEvent, render, screen } from '@testing-library/react';
import { TextInput } from '../TextInput';
import { useFeedbackQuestions } from '../../../hooks';

jest.mock('../../../hooks');

describe('TextInput', () => {
  const onCommentChange = jest.fn();
  beforeEach(() =>
    (useFeedbackQuestions as jest.Mock).mockReturnValue({
      comment: '',
      onCommentChange
    })
  );

  it('should render correctly', () => {
    render(<TextInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should call onCommentChange when text area changes', () => {
    render(<TextInput />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'testValue' }
    });

    expect(onCommentChange).toBeCalledWith('testValue');
  });

  it('should start with comment value', () => {
    (useFeedbackQuestions as jest.Mock).mockReturnValue({
      comment: 'testValue',
      onCommentChange
    });
    render(<TextInput />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'testValue' }
    });

    expect(screen.getByRole('textbox')).toHaveValue('testValue');
  });
});
