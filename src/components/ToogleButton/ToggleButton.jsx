import React, { useState, useEffect } from 'react';
import './ToggleButton.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CheckedIcon = () => <>🌜</>;
const UncheckedIcon = () => <>🌞</>;

const ToggleButton = () => {
    return(
        <div className="wrg-toggle">
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check">
                    {/* <span style={{color:'white'}}>H</span> */}
                </div>
                <div className="wrg-toggle-uncheck">
                    {/* <span style={{color:'white'}}>V</span> */}
                </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
    )
}

export default ToggleButton;