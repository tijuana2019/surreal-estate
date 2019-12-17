import React, { Fragment, Component } from 'react';
import './addproperty.css';

class AddProperty extends Component {
  state = {
    fields: {
      title: '',
      type: 'Flat',
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      city: 'Manchester',
      email: '',
    },
  };

  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
          <button type="submit" label="Add">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AddProperty;
