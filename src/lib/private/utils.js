import { renderGeoJSONLayer } from "./GeoJSONLayer";

//copied from https://github.com/facultyai/dash-bootstrap-components/blob/main/src/private/util.js
const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
      // if children contains just one single element, it gets passed as an object
      // instead of an array - so we put in in a array ourselves!
      return [children];
    }
    return children;
  };
  
  const resolveChildProps = child => {
    // This may need to change in the future if https://github.com/plotly/dash-renderer/issues/84 is addressed
    if (
      child.props._dashprivate_layout &&
      child.props._dashprivate_layout.props
    ) {
      // props are coming from Dash
      const layerType = child.props._dashprivate_layout.type;
      const layerProps = child.props._dashprivate_layout.props;
      layerProps._layerType = layerType;
      return layerProps;
    } else {
      // else props are coming from React (e.g. Demo.js, or Tabs.test.js)
      return child.props;
    }
  };
  
  
  function renderLayer(map,{_layerType, ...props}) {
    
    console.log("rendering layer");
    console.log("map here",map);
    
  
    switch (_layerType) {
      case "GeoJSONLayer":
        console.log("rendering GeoJSONLayer");
        
        renderGeoJSONLayer(map, props);
        break;
        default:
          console.log("layer type not supported");
          
        }
      }
      
  export {parseChildrenToArray, resolveChildProps, renderLayer};









