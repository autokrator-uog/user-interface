import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid } from 'semantic-ui-react'

import HomeHeader from "./HomeHeader/HomeHeader"
import HomeContent from "./HomeContent/HomeContent"
import SidePanel from "./SidePanel/SidePanel"

import './Home.css'

class Home extends Component {

  componentDidMount() {
      if (this.props.username === "") {
          this.props.history.push("/");
          return;
      }
  }

  render(){
    return (
      <div>

        <HomeHeader username={this.props.username}/>

        <Grid stackable>
          <Grid.Column width={10}>
            <HomeContent />
          </Grid.Column>

          <Grid.Column width={5}>
            <SidePanel index={this.props.currentlySelectedAccountIdx}/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      "username": state.app.get('username'),
      currentlySelectedAccountIdx: state.app.get('currentlySelectedAccountIdx'),
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const HomeView = connect(mapStateToProps, mapDispatchToProps)(Home);


export default HomeView;
