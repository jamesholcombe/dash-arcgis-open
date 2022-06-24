import { renderGeoJSONLayer } from "./layers/GeoJSONLayer";
import { renderBasemapGallery } from "./widgets/BasemapGallery";

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
    if (
        child.props._dashprivate_layout &&
        child.props._dashprivate_layout.props
    ) {
      // props are coming from Dash
      const layerType = child.props._dashprivate_layout.type;
      const layerProps = child.props._dashprivate_layout.props;
      layerProps._type = layerType;
      return layerProps;
    } else {
        // else props are coming from React (e.g. Demo.js, or Tabs.test.js)
        return child.props;
    }
  };
  
  
  function renderLayerOrWidget(props) {
    
  
    switch (props._type) {
      case "GeoJSONLayer":
        renderGeoJSONLayer(props);
        break;
    case "BasemapGallery":
        renderBasemapGallery(props);
        
        
        default:
          console.log("layer type not supported");
          
        }
      }
      
  export {parseChildrenToArray, resolveChildProps, renderLayerOrWidget};


