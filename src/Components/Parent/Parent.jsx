import React, { Component } from 'react';
import ChildComponent from '../ChildComponent/ChildComponent';

class ParentComponent extends Component {
  state = {
    productList: [
      { id: 1, brand: 'Midea', type: 'Air Conditioner', price: 1000 },
      { id: 2, brand: 'Samsung', type: 'TV', price: 400 },
      { id: 3, brand: 'GM', type: 'Water Heater', price: 700 },
      { id: 4, brand: 'Toshiba', type: 'Monitor', price: 500 },
    ],
  };

  componentDidMount() {
    // Load products from local storage when the component mounts
    const storedProducts = JSON.parse(localStorage.getItem('productList'));

    if (!storedProducts) {
      // If products are not in local storage, set them using the default state
      localStorage.setItem('productList', JSON.stringify(this.state.productList));
    } else {
      // If products are in local storage, update the state with the stored products
      this.setState({ productList: storedProducts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Save products to local storage when the component updates
    if (prevState.productList !== this.state.productList) {
      localStorage.setItem('productList', JSON.stringify(this.state.productList));
    }
  }

  increaseProductPrice = (index) => {
    const updatedProducts = [...this.state.productList];
    updatedProducts[index].price += 10;
    this.setState({ productList: updatedProducts });
  }

  deleteProduct = (index) => {
    const updatedProducts = [...this.state.productList];
    updatedProducts.splice(index, 1);
    this.setState({ productList: updatedProducts });
  }

  addProduct = () => {
    const newProduct = {
      id: this.state.productList.length + 1,
      brand: 'New Brand',
      type: 'New Type',
      price: 999,
    };

    const updatedProducts = [...this.state.productList, newProduct];
    this.setState({ productList: updatedProducts });
  }

  render() {
    return (
      <div className="parent-container">
        <div className="row">
          <div className="col-md-9">
            <div className="product-list">
              {this.state.productList.map((product, index) => (
                <ChildComponent
                  key={product.id}
                  theWholeProduct={product}
                  increasePrice={() => this.increaseProductPrice(index)}
                  deleteProduct={() => this.deleteProduct(index)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <button className='btn btn-primary btn-block my-2' onClick={this.addProduct}>Add Product</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ParentComponent;
