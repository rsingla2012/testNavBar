import React, { Component } from "react";
import Breadcrumbs from "./Breadcrumbs";
import ItemModal from "./ItemModal";

function generateRandomJSON(items) {
  var result = [];
  for (var i = 4; i < items; i++) {
    result.push({
      id: i + 1,
      name: "test",
      age: 27,
      showModal: false
    });
  }
  return result;
}

var dummyData = generateRandomJSON(10);

class DataTablePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: "Jimmy", age: 26, showModal: false },
        { id: 2, name: "Gede", age: 26, showModal: false },
        { id: 3, name: "Mayu", age: 22, showModal: false },
        { id: 4, name: "Ketut", age: 25, showModal: false }
      ].concat(dummyData)
    };
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleFormUpdate() {
    return (e) => {
      const field = e.target.name;
      const { form } = this.state;
      form[field] = e.target.value;
      this.setState({ form });
    };
  }

  handleModalHide() {
    return () => {
      let { items } = this.state;
      items = items.map((item) => ({
        ...item,
        showModal: false
      }));
      this.setState({ items });
    };
  }

  handleModalShow() {
    return (e) => {
      e.preventDefault();

      this.setState({ showModal: true });
    };
  }

  handleEditItem(selectedItem) {
    return (e) => {
      e.preventDefault();
      let { items } = this.state;
      items = items.map((item) => ({
        ...item,
        showModal: selectedItem.id === item.id
      }));
      this.setState({ items });
    };
  }

  handleItemChange(itemId) {
    return (e) => {
      let { items } = this.state;
      items = items.map((item) => {
        if (item.id === itemId) {
          item[e.target.name] = e.target.value;
        }
        return item;
      });
      this.setState({ items });
    };
  }

  render() {
    const { items } = this.state;
    return (
      <section>
        <Breadcrumbs />
        <table className="table table-bordered table-hover table-light">
          <thead>
            <tr>
              <th>#</th>
              <th>Author</th>
              <th>Version</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <a
                    href="#www.google.com"
                    className="btn btn-primary"
                    onClick={this.handleEditItem(item)}
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.map((item, index) => (
          <ItemModal
            key={item.id}
            show={item.showModal}
            onHide={this.handleModalHide()}
            onItemChange={this.handleItemChange}
            item={item}
          />
        ))}
      </section>
    );
  }
}

export default DataTablePage;
