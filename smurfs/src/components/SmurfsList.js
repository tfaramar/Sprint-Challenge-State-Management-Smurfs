import React from 'react';
import {connect} from 'react-redux';

import Smurf from './Smurf';
import {getData} from '../actions';

const SmurfsList = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="header">
                <button onClick={props.getData}>
                    {props.loading ? (
                        'Loading...'
                    ) : (
                        'Build Smurf Village'
                    )}
                </button>  
            </div>
            <div className="smurfs-display">
            {props.smurfs.map(smurf => {
                   return <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
                })}
                
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      error: state.error,
      loading: state.loading
    }
  }
  
  export default connect(
    mapStateToProps,
    {getData})(SmurfsList);