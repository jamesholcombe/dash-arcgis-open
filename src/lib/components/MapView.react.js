import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map} from '@esri/react-arcgis';

// I need to pass the style to the div holding map.

const MapView = ({id, style, setProps}) => {
    return (
        <div id={id} style={style}>
            <Map style={style} />
        </div>
    );
};

MapView.defaultProps = {};

MapView.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */

    animation: PropTypes.object,

    basemap: PropTypes.string,

    //breakpoints: PropTypes.object,

    center: PropTypes.array,

    //constraints : PropTypes.object,

    //currCords : PropTypes.array,

    //extent : PropTypes.object,

    // heightBreakpoints : PropTypes.string,

    // highlightOptions : PropTypes.object,

    id: PropTypes.string,

    // oauthCreds: PropTypes.object,

    // orientation: PropTypes.string,

    // resizeAlign: PropTypes.string,

    // resolution: PropTypes.number,

    // scale: PropTypes.number,

    style: PropTypes.object,

    type: PropTypes.object,

    viewPoint: PropTypes.object,

    widthBreakpoint: PropTypes.string,

    zoom: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default MapView;
