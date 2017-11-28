import postsTypes from '../types/posts.types';

const INITIAL_STATE = [];

function postsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case postsTypes.POSTS_RETRIEVE_ALL:
      return action.posts;
    default:
      return state;
  }
}

export default postsReducer;
