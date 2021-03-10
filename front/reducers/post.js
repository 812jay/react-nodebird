export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      content: "첫번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://unsplash.com/photos/YNliXm_hMn8",
        },
        {
          src: "https://unsplash.com/photos/p47oVX9qhkA",
        },
        {
          src: "https://unsplash.com/photos/zw8VDs_Pzk8",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "얼른 사고싶어요",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: "더미",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};

export default reducer;
