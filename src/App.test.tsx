import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from 'App';

const language = {
  id: 1,
  label: 'French',
  color: 'LanguageColors.french',
  score: {
    done: '40%',
    todo: 2245,
    unverified: 123,
  },
  flag: 'french.png',
};

describe('Language Ground', () => {
  test('Show modal on clicking add-language btn', async () => {
    render(<App />);

    const addLanguageButton = screen.getByTestId('add-language');
    fireEvent.click(addLanguageButton);
    await waitFor(async () => {
      expect(screen.getByText('Add languages')).toBeInTheDocument();
    });
  });
  test('Add a language', async () => {
    process.env.testForm = '1';
    render(<App />);
    const addLanguageButton = screen.getByTestId('add-language');
    fireEvent.click(addLanguageButton);
    fireEvent.change(screen.getByTestId('language-select'), {
      target: { value: JSON.stringify(language) },
    });
    const submitLanguageButton = screen.getByTestId('submit-language');
    fireEvent.click(submitLanguageButton);

    await waitFor(async () => {
      expect(screen.getByText('French')).toBeInTheDocument();
    });
  });

  test('Remove a language', async () => {
    render(<App />);

    const languageCard = screen.getByTestId('box-1');
    expect(languageCard).toBeInTheDocument();

    fireEvent.mouseOver(languageCard);
    const deleteBtn = screen.getByTestId('language-1');
    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);

    await waitFor(async () => {
      expect(screen.queryByText('French')).not.toBeInTheDocument();
    });
  });
});
