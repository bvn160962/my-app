import React, { Component } from "react";
import styles from './faq.module.scss'

export class Form extends Component {
  state = {
    title: null,
    about: null,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    this.props.addArt (this.state.title, this.state.about);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Статья</legend>
            <label className={styles.label}>
              <input
                onChange={this.onChange}
                type="text"
                name="title"
                placeholder="Заголовок статьи"
              />
            </label>
            <label className={styles.label}>
              <input
                onChange={this.onChange}
                type="text"
                name="about"
                placeholder="О чем статья"
              />
            </label>
            <button type="submit">+</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
