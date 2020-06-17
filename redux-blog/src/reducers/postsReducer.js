export const initialState = {
  posts: [],
  loading: false,
  hasErroes: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case action.GET_POSTS:
      return { ...state, loading: true };
    case action.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErroes: false };
    case action.GET_POSTS_FAILURE:
      return { ...state, loading: false, hasErroes: true };
    default:
      return state;
  }
}
