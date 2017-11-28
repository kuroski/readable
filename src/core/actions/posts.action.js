import { getPosts } from '../../api';
import postsTypes from '../types/posts.types';

export function retrieveAll(category = '') {
  return dispatch => {
    getPosts(category).then(posts =>
      dispatch({ type: postsTypes.POSTS_RETRIEVE_ALL, posts })
    );
  };
}
