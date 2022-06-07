import {useCallback, useEffect} from 'react';
import {parseChildrenToArray, renderLayer} from '../private/utils';

//TODO
//only pass down the relevant children data, or create state.
// at the moment it rerenders as children is constantly changing, I think.

export const MapViewController = ({
    id,
    map,
    view,
    center,
    zoom,
    setProps,
    extent,
    breakpoints,
    constraints,
    widthBreakpoint,
    heightBreakpoint,
    children,
}) => {
    if (view === null) {
        return null;
    }

    if (map === null) {
        return null;
    }

    // setting props if they are not null, which is the default as we let ArcGIS derive them on initial load
    // if null then we set the dash props to match the ArcGIS props
    if (constraints !== null) {
        view.constraints = constraints;
    } else {
        setProps({constraints: view.constraints});
    }

    if (breakpoints !== null) {
        view.breakpoints = breakpoints;
    } else {
        setProps({breakpoints: view.breakpoints});
    }

    if (widthBreakpoint !== null) {
        view.widthBreakpoint = widthBreakpoint;
    } else {
        setProps({widthBreakpoint: view.widthBreakpoint});
    }
    if (heightBreakpoint !== null) {
        view.heightBreakpoint = heightBreakpoint;
    } else {
        setProps({heightBreakpoint: view.heightBreakpoint});
    }

    useEffect(() => {
        view.goTo({center, zoom});
        setProps({extent: view.extent});
    }, [center, zoom]);

    useEffect(() => {
        view.goTo({extent});
        setProps({zoom: view.zoom});
        setProps({center: view.center});
    }, [extent]);

    //use effect for each layer
    //at the moment every layer is rerendered, but we should only rerender the layers that have changed
    console.log('children', children);
    children.map((child) => {
        useEffect(() => {
            renderLayer(map, child);
        }, [children]);
    });

    return null;
};
