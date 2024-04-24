const SHOW_PHOTO = 'show';

type ShowPhotoAction = {
  type: typeof SHOW_PHOTO;
  payload: any
}

const show = (value: any): ShowPhotoAction => ({
  type: SHOW_PHOTO, 
  payload: value,
})
const photoItemReducer = (photo = {}, action: ShowPhotoAction) => {
  switch (action.type) {
    case SHOW_PHOTO:
      return photo = action.payload;
    default:      
      return photo;
  }
};

export const actions = { show }

export default photoItemReducer;