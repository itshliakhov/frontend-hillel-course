export const loger = (store) => (dispatch) => (action) => {
    console.log('action', action);
    console.log('before', store.getState());
    const res = dispatch(action);
    console.log('after', store.getState());
    return res;
}

