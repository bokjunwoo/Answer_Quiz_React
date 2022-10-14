// 초기 상태 설정
const initstate = {
  mbtiResult: '',
  page: 0,
  // 질문
  survey: [
    {
      question:
        '내가 태어난 년도는?',
      answer: [
        {
          text: '1998.01.01',
          result: '',
        },
        {
          text: '1998.01.02',
          result: '',
        },
        {
          text: '1999.01.01',
          result: 'q',
        },
        {
          text: '1999.01.02',
          result: '',
        },
      ],
    },
    {
      question:
        '나의 MBTI는?',
      answer: [
        {
          text: 'ISTP',
          result: '',
        },
        {
          text: 'ISFJ',
          result: '',
        },
        {
          text: 'ISTJ',
          result: 'q',
        },
        {
          text: 'INTJ',
          result: '',
        },
      ],
    },
    {
      question:
        '나의 혈액형은?',
      answer: [
        {
          text: 'O',
          result: 'q',
        },
        {
          text: 'A',
          result: '',
        },
        {
          text: 'B',
          result: '',
        },
        {
          text: 'AB',
          result: '',
        },
      ],
    },
    {
      question:
        '내가 사용하는 핸드폰의 모델은',
      answer: [
        {
          text: '갤럭시 S22',
          result: '',
        },
        {
          text: '갤럭시 S22 울트라',
          result: '',
        },
        {
          text: '아이폰 13',
          result: '',
        },
        {
          text: '아이폰 13Pro',
          result: 'q',
        },
      ],
    },
    {
      question:
        '내가 지금 가고 싶어하는 여행지는?',
      answer: [
        {
          text: '남미',
          result: 'q',
        },
        {
          text: '미국',
          result: '',
        },
        {
          text: '동남아',
          result: '',
        },
        {
          text: '유럽',
          result: '',
        },
      ],
    },
    {
      question:
        '가장 싫어하는 음식은?',
      answer: [
        {
          text: '버섯',
          result: '',
        },
        {
          text: '가지',
          result: 'q',
        },
        {
          text: '당근',
          result: '',
        },
        {
          text: '브로콜리',
          result: '',
        },
      ],
    },
    {
      question:
        '내가 좋아하는 계절은?',
      answer: [
        {
          text: '봄',
          result: '',
        },
        {
          text: '여름',
          result: '',
        },
        {
          text: '가을',
          result: 'q',
        },
        {
          text: '겨울',
          result: '',
        },
      ],
    },
    {
      question:
        '내가 좋아하는 영화 장르는?',
      answer: [
        {
          text: '스릴러',
          result: '',
        },
        {
          text: '액션',
          result: 'q',
        },
        {
          text: '공포',
          result: '',
        },
        {
          text: '멜로',
          result: '',
        },
      ],
    },
    {
      question:
        '내가 좋아하는 간식는?',
      answer: [
        {
          text: '과자',
          result: '',
        },
        {
          text: '초코',
          result: '',
        },
        {
          text: '아이스크림',
          result: 'q',
        },
        {
          text: '과일',
          result: '',
        },
      ],
    },
    {
      question:
        '내가 좋아하는 음식는?',
      answer: [
        {
          text: '피자',
          result: 'q',
        },
        {
          text: '치킨',
          result: '',
        },
        {
          text: '고기',
          result: '',
        },
        {
          text: '곱창',
          result: '',
        },
      ],
    },
  ],
  // 결과
  // 배열로 설정하지 않은 이유는 바로 데이터를 뽑아쓰기 위해서 설정
  explaination: {
    qqqqqqqqqq: {
      text: '당신의 점수는 100점 입니다',
    },
    qqqqqqqqq: {
      text: '당신의 점수는 90점 입니다',
    },
    qqqqqqqq: {
      text: '당신의 점수는 80점 입니다',
    },
    qqqqqqq: {
      text: '당신의 점수는 70점 입니다',
    },
    qqqqqq: {
      text: '당신의 점수는 60점 입니다',
    },
    qqqqq: {
      text: '당신의 점수는 50점 입니다',
    },
    qqqq: {
      text: '당신의 점수는 40점 입니다',
    },
    qqq: {
      text: '당신의 점수는 30점 입니다',
    },
    qq: {
      text: '당신의 점수는 20점 입니다',
    },
    q: {
      text: '당신의 점수는 10점 입니다',
    },
    '': {
      text: '당신의 점수는 0점 입니다',
    }
  },
};

// 액션 타입 설정
const NEXT = 'mbti/NEXT';
const CHECK = 'mbti/CHECK';
const RESET = 'mbti/RESET';

// 액션 생성 함수
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
export default function mbti(state = initstate, action) {
  switch (action.type) {
    case CHECK:
      return {
        ...state,
        mbtiResult: state.mbtiResult + action.payload.result,
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
        mbtiResult: '',
      };
    default: {
      return state;
    }
  }
}
