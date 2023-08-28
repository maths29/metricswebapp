import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar';

describe('Navbar', () => {
  test('clicking back button invokes window.history.back()', () => {
    window.history.back = jest.fn();
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const backButton = screen.getByLabelText('Button with Icon');
    fireEvent.click(backButton);
    expect(window.history.back).toHaveBeenCalledTimes(1);
  });
});
