export const loadPostData = () => ({
    type: 'API_RESPONSE_CALL'
});

export const loadPostSuccess = (posts) => ({
    type: 'API_RESPONSE_SUCCESS',
    payload: posts
});

export const loadPostFailure = (error) => ({
    type: 'API_RESPONSE_FAIL',
    payload: error
});
