import React, { Component } from 'react';


import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

class about extends Component {
    render() {
        return (
            <div>
                <p>Hello about page</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });

export default connect(
    mapStateToProps,
    { getScreams }
  )(about);
  
