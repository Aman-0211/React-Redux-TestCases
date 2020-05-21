import moxios from 'moxios';
import { testStore } from '../utils';
import { fetchPost } from '../actions';

describe('fetchPost action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('store is updated correctly ', () => {
    const exceptedStore = [
      { tite: 'test title 1', desc: 'test desc 1' },
      { tite: 'test title 2', desc: 'test desc 2' },
      { tite: 'test title 3', desc: 'test desc 3' },
      { tite: 'test title 4', desc: 'test desc 4' },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: exceptedStore,
      });
    });
    return store.dispatch(fetchPost()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(exceptedStore);
    });
  });
});
