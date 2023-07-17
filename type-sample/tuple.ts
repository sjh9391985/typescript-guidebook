// JS에서는 지원하지 않지만, TS에서는 지원
// 명시적으로 지정된 형식에 따라 아이템 순서를 설정해야 되고, 추가되는 아이템 또한 tuple에 명시된 타입만 사용가능.

let tupleType: [string, number] = ['str', 1]; // string, number 의 순서는 허용하지 않습니다.
