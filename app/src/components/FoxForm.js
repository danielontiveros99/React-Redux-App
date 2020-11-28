import React, { Fragment } from 'react' //using fragment to avoid using <> </>
//import actions
import { getFoxes } from '../actions';

//this component will need to be connected using connect
import { connect } from 'react-redux';

const FoxForm = props => {

    //function to handle button click
    const handleFetch = e => {
        e.preventDefault();
        props.getFoxes();
    };


    return (
        <Fragment>
            <h2>
                Click the Fox! Button to add cutness to your life.
            </h2>
            {/* If fetching data is true show message, else show button */}
            {props.isFetchingData ? (
                <div className='loading'>
                    ...fetching the foxies...
                </div>
            ) : (
                <button onClick={handleFetch} className='btn'> Cutie! </button>
            )}
        </Fragment>
            
    )
}
//Map state to props

let mSTP = state => {
    return {
        isFetchingData: state.isFetchingData
    }
};

//connect placeholder
export default connect(mSTP,{getFoxes})(FoxForm);
