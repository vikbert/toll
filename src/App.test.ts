import {render} from '@testing-library/svelte';
import {expect} from 'chai';
import App from './App.svelte';

describe('<App>', () => {
  it('renders learn svelte link', () => {
    const {getByText} = render(App);
    const textElement = getByText(/hello, world/i);
    expect(document.body.contains(textElement));
  });
});
