export const initialState = {
  categories: [
    {
      name: 'react',
      path: 'react'
    },
    {
      name: 'redux',
      path: 'redux'
    },
    {
      name: 'udacity',
      path: 'udacity'
    }
  ]
};

export const categoriesTypes = {
  CATEGORY_GET_REQUEST: 'CATEGORY_GET_REQUEST'
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case categoriesTypes.CATEGORY_GET_REQUEST: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}
