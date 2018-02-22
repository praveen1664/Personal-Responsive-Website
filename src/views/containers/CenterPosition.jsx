import React from "react"

export default class extends React.Component{
  render(){
    return(
      <div
        style={{
          position: "absolute",
          display: "block",
          maxWidth: 500,
          maxHeight: "50%",
          padding: 10,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: "auto",
          // background: "lightgrey",

          textAlign: "center",
        }}
      >
        {this.props.children}
      </div>
    )
  }
}