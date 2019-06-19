import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
import { CharacterList } from "../components";
import { getCharacters } from '../actions'

// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('ListView Mounted')
    this.props.getCharacters()
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return(
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      )
    }
    // if (this.props.characters.length > 0)
    // return (
    //   <div className="CharactersList_wrapper">
    //     <CharacterList characters={this.props.characters} />
    //   </div>
    // );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  isFetching: state.isFetching,
  characters: state.characters
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, 
  { getCharacters }
  )(CharacterListView);
