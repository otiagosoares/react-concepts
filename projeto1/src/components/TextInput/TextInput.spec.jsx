import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TextInput from '.';
import userEvent from '@testing-library/user-event';

describe('<Posts />', () => {
  it('should call handleChange function on each kew pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="valor qualquer" />);
    const input = screen.getByPlaceholderText(/type your search/i);

    const value = 'o valor';
    userEvent.type(input, value);
    expect(input.value).toBe('valor qualquer');
    //testa o numero de vezes que a tecla eh precionadada chamando a fn
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testing...'} />);
    const input = screen.getByPlaceholderText(/type your search/i);

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('testing...');
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={'testing...'} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
