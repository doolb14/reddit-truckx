import {createSlice} from '@reduxjs/toolkit';

const SubredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    list: [],
    is_loading_list: false,
    selected_subreddit_url: null,
  },
  reducers: {
    createSubredditList(state, action) {
      state.list = action?.payload?.data;
    },
    changeSelectedSubredditUrl(state, action) {
      state.selected_subreddit_url = action.payload.url;
    },
  },
});

export const {createSubredditList, changeSelectedSubredditUrl} =
  SubredditSlice.actions;
export default SubredditSlice.reducer;
