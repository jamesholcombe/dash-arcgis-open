import {renderGeoJSONLayer} from './layers/GeoJSONLayer';
import {loadModules} from 'esri-loader';

//copied from https://github.com/facultyai/dash-bootstrap-components/blob/main/src/private/util.js
const parseChildrenToArray = (children) => {
    if (children && !Array.isArray(children)) {
        // if children contains just one single element, it gets passed as an object
        // instead of an array - so we put in in a array ourselves!
        return [children];
    }
    return children;
};

const resolveChildProps = (child) => {
    // This may need to change in the future if https://github.com/plotly/dash-renderer/issues/84 is addressed

    // props are coming from Dash
    const layerType = child.props._dashprivate_layout.type;
    const layerProps = child.props._dashprivate_layout.props;
    layerProps._type = layerType;
    return layerProps;
};

async function loadWidget({view, _type, ...props}, addToView = true) {
    let myPromise = loadModules([`esri/widgets/${_type}`], {
        css: true,
    })
        .then(([Widget]) => {
            const widgetObject = {
                view: view,
                ...props,
            };

            if (['Bookmarks'].includes(_type)) {
                widgetObject.container = document.createElement('div');
            }

            const myWidget = new Widget(widgetObject);

            if (addToView) {
                view.ui.add(myWidget, props.position);
            }

            console.log('inside async function: created widget', myWidget);
            return myWidget;
        })
        .catch((err) => console.error(err));

    let myWidget = await myPromise;
    return myWidget;
}

async function renderLayerOrWidget(props) {
    switch (props._type) {
        case 'GeoJSONLayer':
            renderGeoJSONLayer(props);
            break;

        case 'BasemapGallery':
        case 'Bookmarks':
        case 'Home':
        case 'Legend':
        case 'Editor':
            let widget = await loadWidget(props, true)
            
            break;
        case 'Expand':
            const innerProps = props.children.props;
            innerProps._type = props.children.type;
            innerProps.view = props.view;
            widgetPromise = loadWidget(innerProps, false).then((widget) => {
                props.content = widget;
                let expandWidget = loadWidget(props, true);
                return expandWidget;
            });

            widget = await widgetPromise;
        break;

        default:
            console.log('layer type not supported');
    }
    return widget;
}

export {parseChildrenToArray, resolveChildProps, renderLayerOrWidget};
