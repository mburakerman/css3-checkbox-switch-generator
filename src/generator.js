import React, { Component } from "react";
import "./generator.css";

import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import ColorPicker from "rc-color-picker";
import "rc-color-picker/assets/index.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import Collapsible from "react-collapsible";

import "./custom.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      boxShadowHorizontalOffset: -20,
      boxShadowVerticalOffset: 0,
      boxShadowBlur: 0,
      boxShadowSpread: 0,
      boxShadowColor: "#D9DADC",

      width: 40,
      height: 20,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "#D9DADC",
      borderRadius: 50,
      boxShadow: `inset -20px 0px 0px 1px rgba(192, 192, 192, 0.5)`,
      transitionDuration: 200,

      checkedBoxShadowColor: "#4ed164",

      copyToClipboardButtonText: "Copy",
      isChecked: false
    };
  }

  setWidth = value => {
    this.setState({
      width: value
    });
  };

  setHeight = value => {
    this.setState({
      height: value
    });
  };

  setBackgroundColor = value => {
    this.setState({
      backgroundColor: value.color
    });
  };

  setColor = value => {
    this.setState({
      color: value.color
    });
  };

  setBorderWidth = value => {
    this.setState({
      borderWidth: value
    });
  };

  setBorderRadius = value => {
    this.setState({
      borderRadius: value
    });
  };

  setBorderStyle = value => {
    this.setState({
      borderStyle: value.value
    });
  };

  setBorderColor = value => {
    this.setState({
      borderColor: value.color
    });
  };

  setBoxShadowHorizontalOffset = value => {
    this.setState({
      boxShadowHorizontalOffset: value
    });
  };

  setBoxShadowVerticalOffset = value => {
    this.setState({
      boxShadowVerticalOffset: value
    });
  };

  setBoxShadowBlur = value => {
    this.setState({
      boxShadowBlur: value
    });
  };

  setBoxShadowSpread = value => {
    this.setState({
      boxShadowSpread: value
    });
  };

  setBoxShadowColor = value => {
    this.setState({
      boxShadowColor: value.color
    });
  };

  setTransitionDuration = value => {
    this.setState({
      transitionDuration: value
    });
  };

  setCheckedBoxShadowColor = value => {
    document.documentElement.style.setProperty(
      "--checkedBShadowColor",
      value.color
    );
    this.setState({
      checkedBoxShadowColor: value.color
    });
  };

  toggleChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  copyToClipboard = e => {
    var textField = document.createElement("textarea");
    textField.innerText = document.querySelector(".codes").innerText;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    this.setState({
      copyToClipboardButtonText: "Copied!"
    });
    document.querySelector(".copyToClipboard").disabled = true;

    setTimeout(() => {
      document.querySelector(".copyToClipboard").disabled = false;
      this.setState({
        copyToClipboardButtonText: "Copy"
      });
    }, 1500);

    return false;
  };

  render() {
    let borderStyle = ["solid", "dashed", "dotted", "double"];

    return (
      <div className="App">
        <div className="wrapper">
          <section className="generator_area">
            {/* == Width and Height Options == */}
            <div className="widthHeightOptions">
              <Collapsible
                trigger="&#9660; Width and Height"
                transitionTime="300"
                easing="ease"
                open="true"
              >
                <div className="container">
                  <div className="width">
                    <p>Width</p>
                    <div className="width_slider_container">
                      <Slider
                        min={20}
                        max={350}
                        value={this.state.width}
                        orientation="horizontal"
                        onChange={this.setWidth.bind(this)}
                      />
                    </div>
                  </div>

                  <div className="height">
                    <p>Height</p>
                    <div className="height_slider_container">
                      <Slider
                        min={10}
                        max={100}
                        value={this.state.height}
                        orientation="horizontal"
                        onChange={this.setHeight.bind(this)}
                      />
                    </div>
                  </div>
                </div>
              </Collapsible>
            </div>

            {/* == Color Options == */}
            <div className="colorOptions">
              <Collapsible
                trigger="&#9660; Background Color"
                transitionTime="300"
                easing="ease"
              >
                <div className="container">
                  <div className="backgroundColor">
                    <p>Background Color</p>
                    <ColorPicker
                      color={this.state.backgroundColor}
                      alpha={100}
                      onChange={this.setBackgroundColor.bind(this)}
                      placement="bottomLeft"
                    />
                  </div>
                </div>
              </Collapsible>
            </div>

            {/* == Border Options == */}
            <div className="borderOptions">
              <Collapsible
                trigger="&#9660; Border"
                transitionTime="300"
                easing="ease"
                overflowWhenOpen="visible"
              >
                <div className="container">
                  <div className="borderWidth">
                    <p>Border width</p>
                    <Slider
                      min={0}
                      max={25}
                      value={this.state.borderWidth}
                      orientation="horizontal"
                      onChange={this.setBorderWidth.bind(this)}
                    />
                  </div>

                  <div className="borderRadius">
                    <p>Border radius</p>
                    <Slider
                      min={0}
                      max={100}
                      value={this.state.borderRadius}
                      orientation="horizontal"
                      onChange={this.setBorderRadius.bind(this)}
                    />
                  </div>

                  <div className="borderStyle">
                    <p>Border style</p>
                    <Dropdown
                      options={borderStyle}
                      onChange={this.setBorderStyle.bind(this)}
                      value={this.state.borderStyle}
                      placeholder="Select..."
                    />
                  </div>

                  <div className="borderColor">
                    <p>Border color</p>
                    <ColorPicker
                      color={this.state.borderColor}
                      onChange={this.setBorderColor.bind(this)}
                      placement="topLeft"
                    />
                  </div>
                </div>
              </Collapsible>
            </div>

            {/* == Box Shadow Options == */}
            <div className="boxShadowOptions">
              <Collapsible
                trigger="&#9660; Box Shadow"
                transitionTime="300"
                easing="ease"
                overflowWhenOpen="visible"
              >
                <div className="boxShadowHorizontalOffset">
                  <p>Box shadow horizontal offset</p>
                  <Slider
                    min={-50}
                    max={100}
                    value={this.state.boxShadowHorizontalOffset}
                    orientation="horizontal"
                    onChange={this.setBoxShadowHorizontalOffset.bind(this)}
                  />
                </div>

                <div className="boxShadowVerticalOffset">
                  <p>Box shadow vertical offset</p>
                  <Slider
                    min={-50}
                    max={100}
                    value={this.state.boxShadowVerticalOffset}
                    orientation="horizontal"
                    onChange={this.setBoxShadowVerticalOffset.bind(this)}
                  />
                </div>

                <div className="boxShadowBlur">
                  <p>Box shadow blur</p>
                  <Slider
                    min={-50}
                    max={100}
                    value={this.state.boxShadowBlur}
                    orientation="horizontal"
                    onChange={this.setBoxShadowBlur.bind(this)}
                  />
                </div>

                <div className="boxShadowBlur">
                  <p>Box shadow spread</p>
                  <Slider
                    min={-50}
                    max={100}
                    value={this.state.boxShadowSpread}
                    orientation="horizontal"
                    onChange={this.setBoxShadowSpread.bind(this)}
                  />
                </div>
                <div className="boxShadowColor">
                  <p>Color</p>
                  <ColorPicker
                    color={this.state.boxShadowColor}
                    onChange={this.setBoxShadowColor.bind(this)}
                    placement="bottomLeft"
                  />
                </div>
              </Collapsible>
            </div>

            {/* == Other Options == */}
            <div className="otherOptions">
              <Collapsible
                trigger="&#9660; Other"
                transitionTime="300"
                easing="ease"
                overflowWhenOpen="visible"
              >
                <div className="transitionDuration">
                  <p>Transition duration (ms)</p>
                  <Slider
                    min={0}
                    max={1000}
                    value={this.state.transitionDuration}
                    orientation="horizontal"
                    onChange={this.setTransitionDuration.bind(this)}
                  />
                </div>
              </Collapsible>
            </div>

            {/* == Checked Options == */}
            <div class="checkedOptions">
              <Collapsible
                trigger="&#9660; Checked"
                transitionTime="300"
                easing="ease"
                overflowWhenOpen="visible"
              >
                <div className="transitionDuration">
                  <p>Box Shadow Color</p>
                  <ColorPicker
                    color={this.state.checkedBoxShadowColor}
                    onChange={this.setCheckedBoxShadowColor.bind(this)}
                    placement="topLeft"
                  />
                </div>
              </Collapsible>
            </div>
          </section>

          <section className="output_area">
            <input
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.toggleChange.bind(this)}
              className="output"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",

                width: this.state.width,
                height: this.state.height,
                backgroundColor: this.state.backgroundColor,
                borderWidth: this.state.borderWidth,
                borderStyle: this.state.borderStyle,
                borderColor: this.state.borderColor,
                borderRadius: this.state.borderRadius,
                boxShadow: `inset 
                ${this.state.boxShadowHorizontalOffset}px ${
                  this.state.boxShadowVerticalOffset
                }px ${this.state.boxShadowBlur}px ${
                  this.state.boxShadowSpread
                }px ${this.state.boxShadowColor}`,
                transitionDuration: `${this.state.transitionDuration}ms`
              }}
            />
          </section>
        </div>

        <section className="codes_area">
          <button
            className="copyToClipboard"
            onClick={this.copyToClipboard.bind(this)}
          >
            {this.state.copyToClipboardButtonText}
          </button>

          <ul className="codes">
            <li>input.switch &#123;</li>
            <li className="showCssProperty">-webkit-appearance: none;</li>
            <li className="showCssProperty">-moz-appearance: none;</li>
            <li className="showCssProperty">-o-appearance: none;</li>
            <li
              className={
                this.state.width ? "showCssProperty" : "hideCssProperty"
              }
            >
              width:{this.state.width}px;
            </li>
            <li
              className={
                this.state.height ? "showCssProperty" : "hideCssProperty"
              }
            >
              height:{this.state.height}px;
            </li>
            <li
              className={
                this.state.backgroundColor
                  ? "showCssProperty"
                  : "hideCssProperty"
              }
            >
              background-color:{this.state.backgroundColor};
            </li>
            <li
              className={
                this.state.borderColor ? "showCssProperty" : "hideCssProperty"
              }
            >
              border:{this.state.borderWidth}px {this.state.borderStyle}{" "}
              {this.state.borderColor};
            </li>
            <li
              className={
                this.state.borderRadius ? "showCssProperty" : "hideCssProperty"
              }
            >
              border-radius:{this.state.borderRadius}px;
            </li>
            <li
              className={
                this.state.boxShadowHorizontalOffset
                  ? "showCssProperty"
                  : "hideCssProperty"
              }
            >
              -webkit-box-shadow: inset {this.state.boxShadowHorizontalOffset}px{" "}
              {this.state.boxShadowVerticalOffset}px {this.state.boxShadowBlur}px{" "}
              {this.state.boxShadowSpread}px {this.state.boxShadowColor};
            </li>
            <li
              className={
                this.state.boxShadowHorizontalOffset
                  ? "showCssProperty"
                  : "hideCssProperty"
              }
            >
              box-shadow: inset {this.state.boxShadowHorizontalOffset}px{" "}
              {this.state.boxShadowVerticalOffset}px {this.state.boxShadowBlur}px{" "}
              {this.state.boxShadowSpread}px {this.state.boxShadowColor};
            </li>
            <li
              className={
                this.state.transitionDuration
                  ? "showCssProperty"
                  : "hideCssProperty"
              }
            >
              -webkit-transition-duration: {this.state.transitionDuration}ms;
            </li>
            <li
              className={
                this.state.transitionDuration
                  ? "showCssProperty"
                  : "hideCssProperty"
              }
            >
              transition-duration: {this.state.transitionDuration}ms;
            </li>

            <li>&#125;</li>
            <li>input.switch:checked &#123;</li>
            <li
              className={
                this.state.checkedBoxShadowColor
                  ? "showCssProperty"
                  : "hideCssProperty"
              }
            >
              -webkit-box-shadow: inset 20px 0px 0px 1px{" "}
              {this.state.checkedBoxShadowColor};
            </li>
            <li
              className={
                this.state.checkedBoxShadowColor
                  ? "showCssProperty"
                  : "hideCssProperty"
              }
            >
              box-shadow: inset 20px 0px 0px 1px{" "}
              {this.state.checkedBoxShadowColor};
            </li>
            <li>&#125;</li>

            <li>input.switch::-ms-check &#123;</li>
            <li className="showCssProperty">
              {" "}
              -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
              /* IE 8 */
            </li>
            <li className="showCssProperty">
              {" "}
              filter: alpha(opacity=0); /* IE 5-7 */
            </li>
            <li className="showCssProperty"> opacity: 0;</li>
            <li>&#125;</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
