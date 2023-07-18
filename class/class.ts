/**
 * 접근 제어자를 통한 접근 가능 범위 설정.
 **/
class Book {
  // public: 클래스 외부에서 접근 가능
  public title: string;

  // default: public은 기본적으로 생략가능
  author: string;

  // private: Book 클래스 내부에서만 사용가능
  private pvtType: string;

  // protected: Book 클래스를 포함한 서브 클래스에서만 접근 가능
  protected ptdType: string;

  //
}
