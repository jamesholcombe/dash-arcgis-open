import {useCallback, useEffect} from 'react';
import {BasemapGallery} from '../../components/widgets';
import {parseChildrenToArray, renderLayer, renderLayerOrWidget} from '../utils';

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

    //constraits is not working

    // if (constraints !== null) {
    //     view.constraints = constraints;
    // } else {
    //     setProps({constraints: view.constraints});
    // }

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

    //use effect for each layer or widget
    children.map((child) => {
        child.map = map;
        child.view = view;

        useEffect(() => {
            renderLayerOrWidget(child);
        }, [child]);
    });

    return <></>;
};
