import {makeRequest} from '../makeRequest';
import { GET_BLOG_DATA, UPDATE_BLOG_DATA } from '../../constants/apiEndPoint';
import { mockBlogPosts } from '../../mocks/blogPosts';
import { BACKEND_URL } from '../../constants/apiEndPoint';
import axios from 'axios';

jest.mock('axios');

describe('makeRequest', () => {
  it("should make api call only when api endpoint is provided", async () => {
    axios.mockResolvedValue({data: mockBlogPosts});
    expect(axios).toHaveBeenCalledTimes(0);
    await makeRequest(GET_BLOG_DATA());
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({baseURL: BACKEND_URL,
      url: "blog-posts",
      method: "GET"});
  });

  it("should make api call with appropriate request options and return response body when api endpoint and request body is specified", async () => {
    const mockedAxios = axios;
    mockedAxios.mockResolvedValue({ data: { data: { claps: 1 } } });
    expect(mockedAxios).not.toBeCalled();
    const response = await makeRequest(UPDATE_BLOG_DATA(1), {
      data: { claps: 1 },
    });
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: "blog-posts/1",
      method: "PUT",
      data: {
        claps: 1,
      },
    });
    expect(response).toEqual({
      data: {
        claps: 1,
      },
    });
  });
});