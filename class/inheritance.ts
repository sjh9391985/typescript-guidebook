class E_Book extends Book1 {
  paper_type: string = '스크린';

  constructor(title: string, author: string, pages: number, public is_downloadable: boolean) {
    super(title, author, pages);
    this.is_downloadable = is_downloadable;
  }
}
