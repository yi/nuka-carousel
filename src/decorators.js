'use strict';

import React from 'react';

const DefaultDecorators = [
  //{
    //component: React.createClass({
      //render() {
        //return (
          //<button
            //style={this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround)}
            //onClick={this.handleClick}>PREV</button>
        //)
      //},
      //handleClick(e) {
        //e.preventDefault();
        //this.props.previousSlide();
      //},
      //getButtonStyles(disabled) {
        //return {
          //border: 0,
          //background: 'rgba(0,0,0,0.4)',
          //color: 'white',
          //padding: 10,
          //outline: 0,
          //opacity: disabled ? 0.3 : 1,
          //cursor: 'pointer'
        //}
      //}
    //}),
    //position: 'CenterLeft'
  //},
  ////{
    //component: React.createClass({
      //render() {
        //return (
          //<button
            //style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround)}
            //onClick={this.handleClick}>NEXT</button>
        //)
      //},
      //handleClick(e) {
        //e.preventDefault();
        //this.props.nextSlide();
      //},
      //getButtonStyles(disabled) {
        //return {
          //border: 0,
          //background: 'rgba(0,0,0,0.4)',
          //color: 'white',
          //padding: 10,
          //outline: 0,
          //opacity: disabled ? 0.3 : 1,
          //cursor: 'pointer'
        //}
      //}
    //}),
    //position: 'CenterRight'
  //},
  {
    component: React.createClass({
      render() {
        var self = this;
        var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
        return (
          <ul style={self.getListStyles()}>
            {
              indexes.map(function(index) {
                return (
                  <li style={self.getListItemStyles()} key={index}>
                    <button
                      style={self.getButtonStyles(self.props.currentSlide === index)}
                      onClick={self.props.goToSlide.bind(null, index)}>
                      &bull;
                    </button>
                  </li>
                )
              })
            }
          </ul>
        )
      },
      getIndexes(count, inc) {
        var arr = [];
        for (var i = 0; i < count; i += inc) {
          arr.push(i);
        }
        return arr;
      },
      getListStyles() {
        return {
          position: 'relative',
          margin: 0,
          top: 0,
          padding: 0
        }
      },
      getListItemStyles() {
        return {
          listStyleType: 'none',
          display: 'inline-block'
        }
      },
      getButtonStyles(active) {
        return {
          border: 0,
          background: 'transparent',
          color: 'white',
          cursor: 'pointer',
          padding: 4,
          outline: 0,
          fontSize: 20,
          opacity: active ? 0.9 : 0.5
        }
      }
    }),
    position: 'BottomCenter'
  }
];

export default DefaultDecorators;
