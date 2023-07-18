class Book1 {
  public title: string;
  public author: string;
  public pages: number = 150;
  private _manufacturing_plant: string = '충무로 공장';
  protected paper_type: string = '밍크지';

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  /* 메서드 */

  // public 메서드
  public printPages(): string {
    return 'page';
  }

  // protected 메서드
  protected changePaperType(type: string): void {
    this.paper_type = type;
  }

  // private 메서드
  private setManufacturingPlant(plant: string): void {
    this._manufacturing_plant = plant;
  }

  // 클래스 내부 메서드에서 private, protected 메서드 접근 가능
  public setPaperType(type: string): void {
    this.changePaperType(type);
  }

  public setPlant(plant: string): void {
    this.setManufacturingPlant(plant);
  }
}
