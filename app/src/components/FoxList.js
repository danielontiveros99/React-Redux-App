import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const FoxList = props => {
    return (
        <Fragment>
            {props.error ? (
                <div className='alert'>
                    {props.error}
                </div>
            ) : (
                <div>
                    <img src={props.foxes.image} alt='fox(s)'/>
                    <p className='btn'>
                        <a href={props.foxes.link}> Image Link</a>
                    </p>
                </div>
            )}
        </Fragment>
            
    )
};

//map state to props

let mSTP = state => {
    return {
        foxes: state.foxes,
        error: state.error
    };
};

//connect... make sure there is no space between the connect and component, it can cause errors.
export default connect(mSTP,{})(FoxList)

