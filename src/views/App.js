import React from 'react'
import { hashHistory } from 'react-router'
import { Link, withRouter } from 'react-router'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles'

import Paper from 'material-ui/Paper'
import { yellow, brown } from 'material-ui/colors'


console.log({
  ...yellow,
  contrastDefaultColor: "light"
})
export const muiTheme = createMuiTheme({
  palette: {
    primary: brown,
    seconary: yellow,
  },
});

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  updateDimensions() {
    this.setState({height: window.innerHeight})
  }



  render() {
    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <div
            style={{
              color: "gray",
            }}
          >
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(App)