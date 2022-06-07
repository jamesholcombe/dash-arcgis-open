import React, {Component, useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {loadModules} from 'esri-loader';
import {MapViewController} from './MapViewController';
import {parseChildrenToArray, renderLayer,resolveChildProps   } from '../private/utils';





function __MapView({
    id,
    style,
    center,
    zoom,
    basemap,
    setProps,
    extent,
    breakpoints,
    constraints,
    widthBreakpoint,
    heightBreakpoint,
    children
}) {
    const [mapView, setMapView] = useState(null);
    const [map,setMap ] = useState(null);
    const mapContainer = useRef(null);
    children =  parseChildrenToArray(children)
    const childrenProps = children.map(child => resolveChildProps(child));


    

    

    

    
    // console.log("myChildren",myChildren);

    // use a side effect to create the map after react has rendered the DOM
    useEffect(
        () => {
            // define the view here so it can be referenced in the clean up function
            let view;

            // the following code is based on this sample:
            // https://developers.arcgis.com/javascript/latest/sample-code/webmap-basic/index.html
            // first lazy-load the esri classes
            loadModules(['esri/views/MapView', 'esri/Map'], {
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
                setMapView(view);
                setMap(map);
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
            <MapViewController
                map={map}
                view={mapView}
                center={center}
                zoom={zoom}
                setProps={setProps}
                breakpoints={breakpoints}
                extent={extent}
                constraints={constraints}
                widthBreakpoint={widthBreakpoint}
                heightBreakpoint={heightBreakpoint}
                children={childrenProps}
                
            />
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


__MapView.defaultProps = {
    center: [0.13, 51.51],
    zoom: 10,
    basemap: 'streets-navigation-vector',
    breakpoints: {
        xsmall: 544,
        small: 768,
        medium: 992,
        large: 1200,
        xlarge: 1600,
    },
    resizeAlign: 'center',
    // constraints: ,
    // type: null,
    // extent: null,
    // widthBreakpoint: null,
    // heightBreakpoint: null,
    // highlightOptions: null,
    // children : [],
};

__MapView.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     *basemap (a value equal to: 'topo', 'streets', 'satelite', 'hybrid', 'dark-gray', 'gray', 'national-geographic', 'oceans', 'osm', 'terrain', 'dark-gray-vector', 'gray-vector', 'streets-vector', 'streets-night-vector', 'streets-navigation-vector', 'topo-vector' or 'streets-relief-vector'; default 'gray-vector'): The basemap type. Commonly 'gray-vector',. The ID used to identify this component in Dash callbacks.
     */
    basemap: PropTypes.string,

    /**
     breakpoints (dict): The breakpoints for the view. Simple implementation of the below.
    https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#breakpoints
    */
    breakpoints: PropTypes.object,

    /** 
    center (list; default [-168, 46]): Represents the view's center point; when setting the center, pass an array of numbers representing a longitude/latitude pair ([-100.4593, 36.9014]).
    */
    center: PropTypes.array,

    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),

   

    /**
     Basic implementation of the below.
     https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#constraints
     */
    constraints: PropTypes.object,

    /**
     * extent (dict): dictionary of the form {xmin, ymin, xmax, ymax} that represents the extent of the map.
     * Spatial reference is assumed to be the same as the map view's spatial reference.
     * When extent is directly set, zoom and center will be overridden.
     * Based on https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#extent
     */
    extent: PropTypes.object,

    /**
     * heightBreakpoint (string) : Possible Values:"xsmall"|"small"|"medium"|"large"|"xlarge"
     */
    heightBreakpoint: PropTypes.string,

    /**
     * highlightOptions (dict): Basic implementation of the below.
     * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#highlightOptions
     */
    highlightOptions: PropTypes.object,

    /** orientation (string): Either 'landscape' or 'portrait'.
     * READONLY: implementation of the below.
     * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#loaded
     */
    orientation: PropTypes.string,

    /** resizeAlign (string): implementation of https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#resizeAlign
     * Defines which anchor stays still while resizing the browser window. The default, center, ensures the view's center point remains constantly visible as the window size changes. The other options allow the respective portion of the view to remain visible when the window's size is changed.Possible Values:"center"|"left"|"right"|"top"|"bottom"|"top-left"|"top-right"|"bottom-left"|"bottom-right"
     */
    resizeAlign: PropTypes.string,

    style: PropTypes.object,

   

    /**
     * widthBreakpoint (string) : Possible Values:"xsmall"|"small"|"medium"|"large"|"xlarge"
     */
    widthBreakpoint: PropTypes.string,

    /**
     * zoom (number; default 10): Represents the view's zoom level. Setting manually will override the extent.
     */
    zoom: PropTypes.number,

};

export {__MapView as MapView};
