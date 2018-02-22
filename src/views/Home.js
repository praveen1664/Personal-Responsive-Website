import React from 'react'
import { MenuIcon } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';

import FormContainer from "./containers/CenterPosition.jsx"
import FixedHeader from "./Header/FixedHeader.jsx"

const styles = theme => ({
  container: {
    padding:5,
  },
  paper: {
    display: "block",
    maxWidth: 800,
    padding: 15,
    marginLeft:"auto",
    marginRight:"auto",
    // textAlign: 'center',

  },
  menu: {
    display: 'inline-block',
    margin: 5,
  },
  textfield: {
    margin: "20px auto",
    minWidth: "50%",
    width: "100%",
  },
  button: {
    margin: "20px auto",
  },
})


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    const classes = this.props.classes

    // My funny font sizes
    const mediumFont2 = (window.innerWidth/12 < 80) ?
      window.innerWidth/12: 80
    const mediumFont = (window.innerWidth/10 < 100) ?
      window.innerWidth/10: 100


    return(
      <div
        style={{
          background: "#eee",
          display: "block",
          textAlign: "center"
        }}
      >


        <div
          style={{
            // textAlign: "center",
            maxWidth: 500,
            padding: 0,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: (mediumFont * 1.25) + 2,
            paddingTop: 10,
            paddingBottom: 10,
            position: "relative",
            background: "transparent",
            // window height - ( header height + padding + footer height)
            minHeight: window.innerHeight - (81 + ((mediumFont * 1.25) + 2))
          }}
        >
          <div
            style={{
              display: "block",
              marginBottom: -12,
            }}
          >
            <img
              src="bee.png"
              style={{
                veritcalAlign: "bottom",
                display: "inline-block",
                paddingRight: 10,
                height: mediumFont,
                marginLeft: -mediumFont,
              }}
              alt="Inquiry"
            />
            <div
              style={{
                textAlign: "center",

                display: "inline-block",
                fontFamily: "'Italianno', cursive",
                fontSize: mediumFont2,
                fontWeight: "lighter",
              }}
            >
              Inquiry Form
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              maxWidth: 500,
              margin: "10px",
              padding: 20,
              position: "relative",
              background: "white",
            }}
          >

          <TextField
            placeholder="Your name"
            label="Name"
            className={classes.textfield}

          /><br />
          <TextField
            placeholder="Email"
            label="Email"
            className={classes.textfield}
          /><br />
          <TextField
            placeholder="760-547-4838"
            label="Phone"
            className={classes.textfield}
          /><br />
          <Button
            raised
            color="primary"
            // style={{color: "#606060"}}
            style={{
              width: "100%",
              fontSize: "1.2em",
              fontWeight: "lighter",
              height: 45
            }}
            className={classes.button}
          >
            Continue
          </Button>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid grey",
            height: 60,
            display: "block",
            background: "lightgrey",
            verticalAlign: "bottom"
          }}
        >
          <a href="https://bakewithalma.com">
            <img
              src="gallery2.png"
              style={{
                height: 56,
                border: 0,
              }}
            />
          </a>
        </div>
        {console.log(window.innerHeight)}
        <FixedHeader mediumFont={mediumFont} label="Happy Bee Bakery" />

      </div>
    )
  }
}


export default withStyles(styles)(Home)