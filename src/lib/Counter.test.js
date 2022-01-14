import { render, fireEvent } from '@testing-library/svelte'
import svelte from 'svelte-inline-component';

describe('Counter.svelte', () => {
  test('can increment/decrement the counter value', async () => {
    const { getByTestId } = render(await svelte`
      <script>import Counter from '$lib/Counter.svelte';</script>
      <Counter/>
    `);
    expect(getByTestId('counter-value')).to.contain.text('0');

    await fireEvent.click(getByTestId('increment-button'));  
    expect(getByTestId('counter-value')).to.contain.text('1');

    await fireEvent.click(getByTestId('decrement-button'));  
    expect(getByTestId('counter-value')).to.contain.text('0');
  });
});