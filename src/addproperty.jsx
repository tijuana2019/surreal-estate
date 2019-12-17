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
          <label>
            Title:
            <input
              name="title"
              value={this.state.fields.title}
              onChange={this.handleFieldChange}
              placeholder="Enter your search here"
            />
          </label>
          <label>
            Property Type:
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label>
            Number of Bedrooms:
            <input
              name="bedrooms"
              value={this.state.fields.bedrooms}
              onChange={this.handleFieldChange}
              placeholder="Enter ther number of bedrooms"
            />
          </label>
          <label>
            Number of Bathrooms:
            <input
              name="bathrooms"
              value={this.state.fields.bathrooms}
              onChange={this.handleFieldChange}
              placeholder="Enter the number of bathrooms"
            />
          </label>
          <label>
            Price:
            <input
              name="price"
              value={this.state.fields.price}
              onChange={this.handleFieldChange}
              placeholder="Enter your maximum price"
            />
          </label>
          <label>
            City:
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label>
            Your email:
            <input
              name="email"
              value={this.state.fields.email}
              onChange={this.handleFieldChange}
              placeholder="example@email.com"
            />
          </label>

          <button type="submit" label="Add">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AddProperty;
