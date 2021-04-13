import React, { useState, useEffect } from "https://cdn.skypack.dev/react";

import ReactDOM from "https://cdn.skypack.dev/react-dom";

// import { useTransition, animated } from "https://cdnjs.cloudflare.com/ajax/libs/react-spring/9.1.0/web.cjs.js";

function QuoteApp() {
  const [quote, setQuote] = useState("");
  const [isShow, setShow] = useState(true);

  const fetchAPI = async () => {
    const url = "https://api.quotable.io/random";
    const response = await fetch(url);
    const data = await response.json();
    setQuote({
      text: data.content,
      author: data.author });

    setShow(true);
  };

  const randomHex = () => {
    const hexMax = 256 * 256 * 256;
    return (
      "#" +
      Math.floor(Math.random() * hexMax).
      toString(16).
      toUpperCase().
      padStart(6, "0"));

  };

  const changeColor = () => {
    document.documentElement.style.setProperty("--base-color", randomHex());
  };

  useEffect(() => {
    fetchAPI();
    changeColor();
  }, []);

  const handleClick = () => {
    setShow(false);
    setTimeout(() => {
      fetchAPI();
      changeColor();
    }, 500);
  };

  return /*#__PURE__*/(
    React.createElement("container", { id: "container" }, /*#__PURE__*/
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("div", { id: "text-area", className: isShow ? "full" : "transparent" }, /*#__PURE__*/
    React.createElement("p", { id: "text" }, quote.text), /*#__PURE__*/
    React.createElement("p", { id: "author" }, /*#__PURE__*/
    React.createElement("span", null, "\u2014"), " ", quote.author)), /*#__PURE__*/



    React.createElement("div", { id: "btn" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/intent/tweet",
      id: "tweet-quote",
      className: "hbtn hb-fill-on",
      target: "_blank" }, /*#__PURE__*/

    React.createElement("img", { src: "https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/images/Twitter_logo_blue_32.png" })), /*#__PURE__*/

    React.createElement("a", {
      href: "#",
      id: "new-quote",
      className: "hbtn hb-fill-on",
      onClick: handleClick }, /*#__PURE__*/

    React.createElement("p", null, "New Quote")))), /*#__PURE__*/



    React.createElement("div", { id: "by" }, /*#__PURE__*/
    React.createElement("p", null, "by Sangkara"))));



}

ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(QuoteApp, null)),

document.getElementById("app"));