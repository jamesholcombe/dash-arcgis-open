import {useCallback, useEffect} from 'react';
import {eventProps} from './Base';

export const MapViewController = ({
    view,
    center,
    zoom,
    setProps,
    extent,
    breakpoints,
    constraints,
    widthBreakpoint,
    heightBreakpoint,
}) => {
    if (view === null) {
        return null;
    }

    console.log('map controller rendering');
    // view.on(eventProps, function (evt) {

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

    console.log(view.center);
    return null;
};
