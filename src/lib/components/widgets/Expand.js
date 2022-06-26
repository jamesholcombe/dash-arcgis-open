import { renderLayerOrWidget, resolveChildProps } from "../../private/utils"


function Expand(props) {

  

    
    //we parse the props from dash.
   



    renderLayerOrWidget(props);




    return <></>


}

Expand.defaultProps = {
    position: 'top-right',
}

Expand.propTypes = {
   
    
    /**
     * Another widget that will be rendered inside the Expand widget.
     **/
    
    children : PropTypes.string,
    
    
    /**
     * The ID used to identify this component in Dash callbacks.
     * */
    id: PropTypes.string,

    /**
     * position of the basemap gallery. Defaults to top-right.
     * */
    position: PropTypes.string,

    /**
     * Indicates whether the widget is visible.
     * */
    visible: PropTypes.bool,

    /**
     * The widget's default label.
     * */
    label: PropTypes.string,
}

export {Expand}
