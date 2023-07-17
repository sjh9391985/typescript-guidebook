/**
 * Object
 * - 변수에 초기 설정된 값을 암시적으로 할당 가능한 데이터 타입으로 설정
 */

let Dom: {
  version: string;
  el: () => void;
  css: () => void;
  [propName: string]: any; // 새로운 속성을 추가할 때마다 타입을 지정하기 위함.
};

Dom = {
  version: '0.1',
  el() {},
  css() {},
};
