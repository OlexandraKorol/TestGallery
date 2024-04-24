export const ADD_PHOTOS = 'ADD_PHOTOS';
export const FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR';

export const addPhotos = (photos: any) => ({
  type: ADD_PHOTOS,
  payload: photos,
});

export const fetchPhotosError = (error: any) => ({
  type: FETCH_PHOTOS_ERROR,
  payload: error,
});

const initialState = {
  photos: [],
  error: null,
};

export const galleryReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ADD_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
      };
    case FETCH_PHOTOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
