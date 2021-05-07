import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Posts } from '.';

const props = {
  posts: [
    { id: 1, title: 'title 1', body: 'body', cover: 'img/cover.png' },
    { id: 2, title: 'title 2', body: 'body', cover: 'img/cover.png' },
    { id: 3, title: 'title 3', body: 'body', cover: 'img/cover.png' },
  ],
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
