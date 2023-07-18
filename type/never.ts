/**
 * never 타입
 * - 함수 리턴 타입에 never 사용될 경우 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미.
 */

// 항상 오류 발생
let invalid = (message: string): never => {
  throw new Error(message);
};

// never 타입 추론
let fail = () => {
  return invalid('실패');
};

// never 타입 지정 변수
let neverType: never;

neverType = (function (): never {
  throw new Error('error');
})();
