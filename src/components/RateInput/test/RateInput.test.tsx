import { fireEvent, render, screen } from '@testing-library/react';
import { RateInput } from '../RateInput';
import { useFeedbackQuestions } from '../../../hooks';

jest.mock('../../../hooks');

describe('RateInput', () => {
  const onRateChange = jest.fn();
  beforeEach(() =>
    (useFeedbackQuestions as jest.Mock).mockReturnValue({ onRateChange })
  );

  it('should render correctly', () => {
    render(<RateInput />);

    expect(screen.getByTitle('1')).toBeInTheDocument();
    expect(screen.getByTitle('2')).toBeInTheDocument();
    expect(screen.getByTitle('3')).toBeInTheDocument();
    expect(screen.getByTitle('4')).toBeInTheDocument();
    expect(screen.getByTitle('5')).toBeInTheDocument();
  });

  it('should call onRateChange correctly according to star ind', () => {
    render(<RateInput />);

    fireEvent.click(screen.getByTitle('1'));
    expect(onRateChange).toBeCalledWith(0);
    fireEvent.click(screen.getByTitle('2'));
    expect(onRateChange).toBeCalledWith(1);
    fireEvent.click(screen.getByTitle('3'));
    expect(onRateChange).toBeCalledWith(2);
    fireEvent.click(screen.getByTitle('4'));
    expect(onRateChange).toBeCalledWith(3);
    fireEvent.click(screen.getByTitle('5'));
    expect(onRateChange).toBeCalledWith(4);
  });
});
