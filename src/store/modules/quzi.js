// 빈 값 전달
const initStateEmpty = {
  quziResult: '',
  page: 0,
  survey: [],
  explanation: {},
};

// 액션 타입 설정
const INIT = 'quzi/INIT';
const NEXT = 'quzi/NEXT';
const CHECK = 'quzi/CHECK';
const RESET = 'quzi/RESET';

// 액션 생성 함수
export function init(data) {
  return {
    type: INIT,
    payload: data,
  };
}

export function next() {
  return {
    type: NEXT,
  };
}

export function check(result) {
  return {
    type: CHECK,
    payload: { result },
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

// 리듀서
export default function quzi(state = initStateEmpty, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        survey: action.payload.survey,
        explanation: action.payload.explanation,
      };
    case CHECK:
      return {
        ...state,
        quziResult: state.quziResult + action.payload.result,
      };
    case NEXT:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        page: 0,
        quziResult: '',
      };
    default: {
      return state;
    }
  }
}
