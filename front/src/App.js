import React, { Component } from "react";
import Title from "./components/Title";
import axios from "axios";

class App extends Component {
  state = {
    products: []
  };
  loadProducts = async () => {
    const result = await axios.get("http://localhost:9999/api/products");
    this.setState({
      products: result.data
    });
  };
  deleteProduct = async product => {
    const url = `http://localhost:9999/api/products/${product._id}`;
    await axios.delete(url);
    this.loadProducts();
  };
  componentDidMount() {
    this.loadProducts();
  }
  render() {
    return (
      <>
        <h1>Lista de Produtos</h1>
        <Title color="red">Aqui estão os produtos</Title>
        <Title color="gray">Você pode excluir qualquer um.</Title>
        <ul>
          {this.state.products.map((item, index) => {
            return (
              <li key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.url}>{item.url}</a>
                <br />
                <button
                  onClick={() => {
                    this.deleteProduct(item);
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
