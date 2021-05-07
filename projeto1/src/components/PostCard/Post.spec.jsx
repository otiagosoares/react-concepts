import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { PostCard } from '.';

const mock = {
  id: 1,
  title: 'title post 1',
  body: 'body text',
  cover: 'img/img.png',
};

describe('<PostCard />', () => {
  it('should rendered PostCard on screed correctly', () => {
    render(<PostCard {...mock} />);

    const image = screen.getByRole('img', { name: mock.title });
    const heading = screen.getByRole('heading', { name: 'title post 1 - 1' });

    expect(image).toHaveAttribute('src', mock.cover);
    expect(heading).toBeInTheDocument();
  });

  it('should match snapchot', () => {
    const { container } = render(<PostCard {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
