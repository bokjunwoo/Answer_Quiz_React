import API from '../../api/api';

const initialState = {
  quziData: [],
  loadingData: false,
  errorData: null,
  counts: [],
  loadingCounts: false,
  errorCounts: null,
  postCount: null,
  loadingCount: false,
  errorCount: null,
};

const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const FETCH_COUNTS_REQUEST = 'FETCH_COUNTS_REQUEST';
const FETCH_COUNTS_SUCCESS = 'FETCH_COUNTS_SUCCESS';
const FETCH_COUNTS_FAILURE = 'FETCH_COUNTS_FAILURE';

const POST_COUNT_REQUEST = 'POST_COUNT_REQUEST';
const POST_COUNT_SUCCESS = 'POST_COUNT_SUCCESS';
const POST_COUNT_FAILURE = 'POST_COUNT_FAILURE';

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: FETCH_COUNTS_FAILURE,
  payload: error,
});

const fetchCountsRequest = () => ({
  type: FETCH_COUNTS_REQUEST,
});

const fetchCountsSuccess = (data) => ({
  type: FETCH_COUNTS_SUCCESS,
  payload: data,
});

const fetchCountsFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

const postCountRequest = () => ({
  type: POST_COUNT_REQUEST,
});

const postCountSuccess = () => ({
  type: POST_COUNT_SUCCESS,
});

const postCountFailure = (error) => ({
  type: POST_COUNT_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await API.get('/getdata');
      dispatch(fetchDataSuccess(response.data[0]));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export const fetchCounts = () => {
  return async (dispatch) => {
    dispatch(fetchCountsRequest());
    try {
      const response = await API.get('/count');
      dispatch(fetchCountsSuccess(response.data[0].counts));
    } catch (error) {
      dispatch(fetchCountsFailure(error.message));
    }
  };
};

export const postCount = () => {
  return async (dispatch) => {
    dispatch(postCountRequest());
    try {
      const response = await API.post('/inccount');
      dispatch(postCountSuccess(response));
    } catch (error) {
      dispatch(postCountFailure(error.message));
    }
  };
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loadingData: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loadingData: false,
        quziData: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loadingData: false,
        quziData: [],
        errorData: action.payload,
      };
    case FETCH_COUNTS_REQUEST:
      return {
        ...state,
        loadingCounts: true,
      };
    case FETCH_COUNTS_SUCCESS:
      return {
        ...state,
        loadingCounts: false,
        counts: action.payload,
      };
    case FETCH_COUNTS_FAILURE:
      return {
        ...state,
        loadingCounts: false,
        counts: [],
        errorCounts: action.payload,
      };
    case POST_COUNT_REQUEST:
      return {
        ...state,
        loadingData: true,
      };
    case POST_COUNT_SUCCESS:
      return {
        ...state,
        loadingData: false,
        quziData: action.payload,
      };
    case POST_COUNT_FAILURE:
      return {
        ...state,
        loadingData: false,
        quziData: [],
        errorData: action.payload,
      };
    default:
      return state;
  }
}
