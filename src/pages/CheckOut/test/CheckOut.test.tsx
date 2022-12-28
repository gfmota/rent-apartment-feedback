import { render, screen } from '@testing-library/react';
import { CheckOut } from '../CheckOut';
import { messages } from '../messages';

describe('CheckOut', () => {
  it('should render correctly', () => {
    render(<CheckOut />);

    expect(screen.getByText(messages.thankYou)).toBeInTheDocument();
    expect(screen.getByTitle(messages.smileAlt)).toBeInTheDocument();
  });
});
