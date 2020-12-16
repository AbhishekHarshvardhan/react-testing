import { SAVE_COMMENT } from '../../actions/types';
import commentReducer from '../comments';

it('handles action of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment',
  };

  const newState = commentReducer([], action);
  expect(newState).toEqual(['New Comment']);
});

it('handles action of unknown type', () => {
  expect(commentReducer([], {})).toEqual([]);
});
