import React, { Component } from "react";

export default class Popup extends Component {

  handleClick = () => {
    this.props.toggle();
  };

  render() {
    const { videoKey } = this.props;
    console.log(videoKey);
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}
