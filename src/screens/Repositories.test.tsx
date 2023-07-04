import React from 'react';
import { render, shallow, mount, queryByLabelText } from 'enzyme';
import useAxios from 'axios-hooks'

import Repositories from './Repositories';
import Repository from '../components/Repository';
import { TRepository } from '../types';

jest.mock('axios-hooks');

const fakeResponse = [{
  "id": 659510798,
  "name": "Test",
  "full_name": "slarkvan/test",
  "owner": {
    "login": "slarkvan",
    "avatar_url": "https://avatars.githubusercontent.com/u/131340443?v=4",
  },
  "html_url": "https://github.com/test/test",
  "description": "test.",
  "created_at": "2023-06-28T02:06:49Z",
  "stargazers_count": 562,
  "language": "JavaScript",
  "forks": 240,
  "watchers": 562,
}];

const fakeRepository: TRepository = {
  id: 659510798,
  name: "Test",
  fullName: "slarkvan/test",
  owner: {
    login: "slarkvan",
    avatarUrl: "https://avatars.githubusercontent.com/u/131340443?v=4",
  },
  htmlUrl: "https://github.com/test/test",
  description: "test.",
  createdAt: "2023-06-28T02:06:49Z",
  stars: 562,
  language: "JavaScript",
  forks: 240,
  watchers: 562,
};

describe('<Repositories />', () => {

  it('renders <Repositories /> without errors', async () => {

    useAxios.mockImplementation(() => [{
      data: {
        items: fakeResponse
      }
    }]);

    const wrapper = mount(<Repositories />);

    expect(wrapper.state('repositories')).to.equal([fakeRepository]);

  });
});
