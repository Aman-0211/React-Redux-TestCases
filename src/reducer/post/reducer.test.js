import { GET_POST } from '../../actions/types';
import postReducer from './reducer';

describe('Post Reducer', () => {
  it('Should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new state when it receiving correct type', () => {
    const posts = [
      { title: 'Test 1' },
      { title: 'Test 2' },
      { title: 'Test 2' },
      { title: 'Test 4' },
    ];
    const newState = postReducer(undefined, {
      type: GET_POST,
      payload: posts,
    });

    expect(newState).toEqual(posts);
  });
});
