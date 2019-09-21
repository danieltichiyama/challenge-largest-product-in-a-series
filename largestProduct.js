class LargestProduct {
  constructor(number) {
    this.getLargestProduct = function() {
      let arr = ("" + number).split("");
      return arr.reduce((accumulator, current, i, array) => {
        let product =
          current * array[i + 1] * array[i + 2] * array[i + 3] * array[i + 4];
        if (product > accumulator) {
          return product;
        } else {
          return accumulator;
        }
      }, 0);
    };

    this.getLargestProductIndex = function() {
      let arr = ("" + number).split("");
      let largestProduct = this.getLargestProduct();
      for (let i = 0; i < arr.length; i++) {
        let product =
          arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3] * arr[i + 4];
        if (product === largestProduct) {
          return i;
        }
      }
    };
  }
}

module.exports = LargestProduct;
