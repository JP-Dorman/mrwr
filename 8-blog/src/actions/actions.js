import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


// Example - we can still have normal action creators with thunk
export const fetchPets = () => {
  return {
    type: 'FETCH_PETS',
    payload: 'yo'
  }
}


// But we can also return functions which allows us to do async stuff
// When the async finishes, we throw the result back into the dispatch
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
}

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // Chain together these methods on this data
  // Lodash custom map on the userId value
  // Lodash uniq grabs unique values
  // For each uniq id dispatch fetchUser
  // Use value to execute chain
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
  ;
}
