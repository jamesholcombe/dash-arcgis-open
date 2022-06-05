import React, {Component, useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {loadModules} from 'esri-loader';
import {eventProps} from './Base';
import {MapViewController} from './MapViewController';

// this is ESRIs MapView component
// I am using it as a base
function __MapView({id, style, center, zoom, basemap}) {
    const [currentMapView, setCurrentMapView] = useState(null);

    const [mapCenter, setCenter] = useState(center);
    const mapContainer = useRef(null);

    // use a side effect to create the map after react has rendered the DOM
    useEffect(
        () => {
            // define the view here so it can be referenced in the clean up function
            let view;

            // the following code is based on this sample:
            // https://developers.arcgis.com/javascript/latest/sample-code/webmap-basic/index.html
            // first lazy-load the esri classes
            loadModules(['esri/views/MapView', 'esri/WebMap'], {
                css: true,
            }).then(([MapView, Map]) => {
                // then we load a web map from an id
                const map = new Map({
                    basemap: basemap,
                });

                // and we show that map in a container
                view = new MapView({
                    map: map,
                    // use the ref as a container
                    container: mapContainer.current,
                    zoom: zoom,
                    center: center,
                });
                setCurrentMapView(view);
                //after map loads, connect to listen to mouse move & drag events
            });

            return () => {
                // clean up the map view
                if (!!view) {
                    view.destroy();
                    view = null;
                }
            };
        },
        // only re-load the map if the id has changed
        [id]
    );

    return (
        <div style={style}>
            <MapViewController view={currentMapView} />
            <div
                id={id}
                style={{
                    padding: '0',
                    margin: '0',
                    height: '100%',
                    width: '100%',
                }}
                ref={mapContainer}
            />
            ;
        </div>
    );
}

/**
 * Dash-assigned callback that should be called to report property changes
 * to Dash, to make them available for callbacks.
 */

__MapView.defaultProps = {
    center: [0.13, 51.51],
    zoom: 10,
    basemap: 'streets-navigation-vector',
};

__MapView.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    // animation: PropTypes.object,

    /**
     *basemap (a value equal to: 'topo', 'streets', 'satelite', 'hybrid', 'dark-gray', 'gray', 'national-geographic', 'oceans', 'osm', 'terrain', 'dark-gray-vector', 'gray-vector', 'streets-vector', 'streets-night-vector', 'streets-navigation-vector', 'topo-vector' or 'streets-relief-vector'; default 'gray-vector'): The basemap type. Commonly 'gray-vector',. The ID used to identify this component in Dash callbacks.
     */

    basemap: PropTypes.string,

    //breakpoints: PropTypes.object,

    /** 
    center (list; default [-168, 46]): Represents the view's center point; when setting the center, pass an array of numbers representing a longitude/latitude pair ([-100.4593, 36.9014]).
    */
    center: PropTypes.array,

    //constraints : PropTypes.object,

    //currCords : PropTypes.array,

    //extent : PropTypes.object,

    // heightBreakpoints : PropTypes.string,

    // highlightOptions : PropTypes.object,

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
};

export {__MapView as MapView};
