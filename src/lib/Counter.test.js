import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from '@testing-library/svelte'
import Counter from './Counter.svelte';

describe('Counter.svelte', () => {
  test('can increment/decrement the counter value', async () => {
    const { getByTestId } = render(Counter);
    expect(getByTestId('counter-value')).toHaveTextContent('0');

    await fireEvent(
      getByTestId('increment-button'),
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );  
    expect(getByTestId('counter-value')).toHaveTextContent('1');

    await fireEvent(
      getByTestId('decrement-button'),
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );  
    expect(getByTestId('counter-value')).toHaveTextContent('0');
  });
});