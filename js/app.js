class ViewModel {
  constructor(cats) {
    this.cats = ko.observable(cats);
    this.currentCat = ko.observable(this.cats()[0]);
    this.clickCat = () => {
      this.currentCat({
        ...this.currentCat(),
        clickCount: this.currentCat().clickCount + 1
      });
    }
  }


}

const cats = [
  {
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    clickCount: 0,
    nickNames: ['Beta', 'Gama', 'Alpha']
  }
];

ko.applyBindings(new ViewModel(cats));
