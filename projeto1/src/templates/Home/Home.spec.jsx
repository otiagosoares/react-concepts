import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from '.';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title 1',
          body: 'body',
          url: 'img1.png',
        },
        {
          userId: 2,
          id: 2,
          title: 'title 2',
          body: 'body',
          url: 'img2.png',
        },
        {
          userId: 3,
          id: 3,
          title: 'title 3',
          body: 'body',
          url: 'img3.png',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render search, posts and load more', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText('Nao existem posts para mostar =(');

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);

    expect(search).toBeInTheDocument();
  });
});
