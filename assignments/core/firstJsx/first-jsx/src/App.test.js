import { render, getByText } from '@testing-library/react';
import App from './App';

test('renders desired text', () => {
  render(<App />);
  expect(getByText('Hello Dojo!')).not.toBeVisible()
  expect(getByText('Visibility Hidden Example')).not.toBeVisible()
  expect(getByText('Display None Example')).not.toBeVisible()
  expect(getByText('Hidden Parent Example')).not.toBeVisible()
  expect(getByText('Visible Example')).toBeVisible()
  expect(getByText('Hidden Attribute Example')).not.toBeVisible()
  expect(getByText('Hidden Details Example')).not.toBeVisible()
  expect(getByText('Visible Details Example')).toBeVisible()
});
