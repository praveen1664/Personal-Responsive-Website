import React from "react"

export default class extends React.PureComponent{
  render(){
    return(
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          textAlign: "center",
          backgroundImage: "url(./woodheader.jpg)",
          backgroundRepeat: "repeat-x",
        }}
      >
        <h2
          style={{
            height: this.props.mediumFont * 1.25,
            fontFamily: "'Italianno', cursive",
            fontSize: this.props.mediumFont,
            fontWeight: "lighter",
            color: "white",
          }}
        >
          {this.props.label}
        </h2>
        <hr
          style={{
            height: 0,
            padding: 0,
            margin: 0,
          }}
        />
      </div>
    )
  }
}