import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CardType } from "../../components/Card";
import { RootState } from "../store";

type initialType = {
  selectedPost: CardType | null,
  isVisibleSelectedModal: boolean,
};

const initialState: initialType = {
  selectedPost: null,
  isVisibleSelectedModal: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<CardType | null>) => {
      state.selectedPost = action.payload;
    },
    setPostVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisibleSelectedModal = action.payload;
    },
  },
});
export const { setSelectedPost, setPostVisibility } = postSlice.actions;
export default postSlice.reducer;
export const PostSelectors = {
  getSelectedPost: (state: RootState)=>
    state.posts.selectedPost,
  getVisibleSelectedModal: (state: RootState)=>
    state.posts.isVisibleSelectedModal,
}
