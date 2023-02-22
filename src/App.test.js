import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import {mockBlogPosts} from './mocks/blogPosts';
import * as utils from './utils/makeRequest';

// jest.mock('./utils/makeRequest', () => () => {
//   return Promise.resolve(mockBlogPosts);
// });

// describe('App', () => { // it isn't waiting for the promise to resolve
//   it('renders App component', async () => {
//     const { asFragment } = render(<App />);
//     await waitFor(() => {
//       expect(screen.getByText("Loading")).toBeTruthy();
//     });
//     expect(asFragment).toMatchSnapshot();
//   });

//   it('renders App component', async () => {
//     const { asFragment } = render(<App />);
//     await waitFor(() => {
//       expect(screen.getByText("mock title 1")).toBeTruthy();
//     });
//     expect(asFragment).toMatchSnapshot();
//   });
// });

// jest.mock('./utils/makeRequest');

// describe('App', () => {
//   const mockedMakeRequest = makeRequest;

//   it('renders App component', async () => {
//     mockedMakeRequest.mockResolvedValue(mockBlogPosts);
//     const { asFragment } = render(<App />);
//     await waitFor(() => {
//       expect(screen.getByText("mock title 1")).toBeTruthy();
//     });
//     expect(asFragment).toMatchSnapshot();
//   });
// });

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);
    expect(screen.getByText("Loading")).toBeTruthy();
  });

  it('renders App component', async () => {
    jest.spyOn(utils, 'makeRequest').mockResolvedValue(mockBlogPosts);
    const { asFragment } = render(<App />);
    await waitFor(() => {
      expect(screen.getByText("mock title 1")).toBeTruthy();
    });
    expect(asFragment).toMatchSnapshot();
  });
});
