import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    products: []
  };
  getProductsFromApi = () => {
    axios
      .get("http://localhost:9999/api/products", {
        crossDomain: true
      })
      .then(result => {
        this.setState({ products: result.data });
      });
  };
  deleteProduct = product => {
    axios
      .delete(`http://localhost:9999/api/products/${product._id}`)
      .then(result => {
        this.getProductsFromApi();
      });
  };
  componentDidMount() {
    this.getProductsFromApi();
  }
  render() {
    return (
      <>
        <h1>Lista de Produtos</h1>
        <ul>
          {this.state.products &&
            this.state.products.map(product => {
              return (
                <li key={product._id}>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <a href={product.url}>{product.url}</a>
                  <button
                    onClick={() => {
                      this.deleteProduct(product);
                    }}
                  >
                    Excluir
                  </button>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default App;
