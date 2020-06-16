export const initialState = {
  posts: [],
  loading: false,
  hasErroes: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
