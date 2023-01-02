import Head from 'next/head'
import React, { Component } from "react";

export class about extends Component {
  render() {
    return (
      <>
        <Head>
          <title>About Page</title>
        </Head>
        <div>
          <h1>About</h1>
          <ul>
            <li className="item" id="id1">
              Item 1
            </li>
            <li className="item" id="id2">
              Item 2
            </li>
            <li className="item" id="id3">
              Item 3
            </li>
            <li className="item" id="id4">
              Item 4
            </li>
            <li className="item" id="id5">
              Item 5
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default about;
