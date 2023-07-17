/**
 * "noImplicitAny": true 경우에는 명시적으로 타입 설정을 하지않음.
 * -> 암시적인 any type 사용 시 오류메시지 출력.
 */

function setInfo(id: number, name: string) {
  return { id, name };
}

let obj = setInfo(123, '가나다');

/**
 * 유니온 타입
 * - 매개변수 설정 가능한 타입 값을 '|' 사용하여 설정
 */
function setUnion(id: number | string, name: string) {
  return { id, name };
}

/**
 * 함수 리턴 타입
 * void는 결과 값 반환을 하지 않음
 */

// return: void
function voidReturn(name: string): void {}

// return: number
function numReturn(name: number): number {
  return name;
}

// return: string
const strReturn = (name: string): string => {
  return name;
};

/**
 * 함수 식
 * 변수에 함수 값 할당하는 식은 컴파일 과정에서 오류를 발생시키지 않음.
 */
