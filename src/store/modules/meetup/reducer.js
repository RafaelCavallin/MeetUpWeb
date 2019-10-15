import produce from 'immer';

const INITIAL_STATE = {
  token: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/NEW_MEETUP_REQUEST': {
        break;
      }
      default:
    }
  });
}
