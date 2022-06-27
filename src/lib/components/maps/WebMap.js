 import { loadModules } from "esri-loader";
 import { useEffect, useState, useRef } from "react";
 import {MapViewController} from '../../private/maps/MapViewController';
 import {
     parseChildrenToArray,
     resolveChildProps,
 } from '../../private/utils';
 
 
 // use a side effect to create the map after react has rendered the DOM
 function __WebMap({basemap, center, zoom, id, style, setProps, breakpoints, extent, constraints, widthBreakpoint, heightBreakpoint, children, portalItem}) { 
    
    
    const [mapView, setMapView] = useState(null);
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);
    
    
    if (children === undefined || children === null) {
        children = [];
    }
    children = parseChildrenToArray(children);
    const childrenProps = children.map((child) => resolveChildProps(child));
    
    
    
    useEffect(

    () => {
        // define the view here so it can be referenced in the clean up function
        let view;

        // the following code is based on this sample:
        // https://developers.arcgis.com/javascript/latest/sample-code/webmap-basic/index.html
        // first lazy-load the esri classes
        loadModules(['esri/views/MapView', 'esri/WebMap'], {
            css: true,
        }).then(([MapView, WebMap]) => {
            // then we load a web map from an id
            const map = new WebMap({
                basemap: basemap,
                portalItem: {
                    id: portalItem
                  }
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
return  <div style={style}>
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




 }
__WebMap.defaultProps = {
    basemap: 'topo-vector',
    center: [-118.24, 34.05],
    zoom: 10,
}

 __WebMap.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    basemap: PropTypes.string,
    center: PropTypes.array,
    zoom: PropTypes.number,
    portalItem: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
   
    breakpoints: PropTypes.array,
    extent: PropTypes.array,
    constraints: PropTypes.array,
    widthBreakpoint: PropTypes.string,
    heightBreakpoint: PropTypes.string,
}

export { __WebMap as WebMap };