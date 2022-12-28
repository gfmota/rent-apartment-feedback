import { render, screen } from '@testing-library/react';
import { Photo } from '../Photo';
import { messages } from '../messages';
import { FeedbackState } from '../../../state/FeedbackContext/reducer';
import { FeedbackContext } from '../../../state/FeedbackContext';
import { BrowserRouter } from 'react-router-dom';

const renderPhoto = (state: FeedbackState) =>
  render(
    <FeedbackContext.Provider value={{ state, dispatch: jest.fn() }}>
      <BrowserRouter>
        <Photo />
      </BrowserRouter>
    </FeedbackContext.Provider>
  );

describe('Photo', () => {
  it('should render beach image on step 1', () => {
    renderPhoto({ step: 1 });

    expect(screen.getByAltText(messages.beachAlt)).toBeInTheDocument();
  });

  it('should render building image on step 2', () => {
    renderPhoto({ step: 2 });

    expect(screen.getByAltText(messages.buildingAlt)).toBeInTheDocument();
  });

  it('should render apartment image on step 3', () => {
    renderPhoto({ step: 3 });

    expect(screen.getByAltText(messages.apartmentAlt)).toBeInTheDocument();
  });
});
