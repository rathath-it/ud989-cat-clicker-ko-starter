const cats = [
  {
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nickNames: ['Beta', 'Gama', 'Alpha']
  },
  {
    name: 'Babby',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nickNames: [, 'Bama', 'ABla']
  }
];

class ViewModel {
  constructor(cats) {
    this.cats = ko.observableArray([]);
    cats.forEach(cat => this.cats.push(new Cat(cat)))
    this.currentCat = ko.observable(this.cats()[0]);
    this.clickCat = () => {
      this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };

    this.setCurrentCat = (cat) => {
      this.currentCat(cat)
    }
  }
}

class Cat {
  constructor(data) {
    this.name = ko.observable(data.name);
    this.clickCount = ko.observable(data.clickCount || 0);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickNames = ko.observable(data.nickNames || []);
    this.level = ko.computed(() => {
      const clicks = this.clickCount();
      if (clicks < 10) return 'Infant';
      if (clicks < 20) return 'Adult';
      return 'Ninja';
    });
  }
}

ko.applyBindings(new ViewModel(cats));
