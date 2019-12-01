import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} />)

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: id => dispatch({ type: 'DELETE_BAND', id })
=======
  addBand: name => dispatch({ type: "ADD_BAND", name })
  delete: id => dispatch({type: 'DELETE_BAND', id })
>>>>>>> 265c63f830b01b4557d72e8338b4b67be0f5aad6
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
