import {createSlice} from '@reduxjs/toolkit';
import {POST_FILTERS} from '../../constants';

const PostSlice = createSlice({
  name: 'post',
  initialState: {list: [], is_loading_list: false, filter: POST_FILTERS.HOT},
  reducers: {
    createPostsList(state, action) {
      state.list = action.payload.posts;
    },
    appendPostsList(state, action) {
      state.list = [...state.list, ...action.payload.posts];
    },
    changePostsFilter(state, action) {
      state.filter = action.payload.filter;
    },
  },
});

export const {createPostsList, changePostsFilter, appendPostsList} =
  PostSlice.actions;
export default PostSlice.reducer;
