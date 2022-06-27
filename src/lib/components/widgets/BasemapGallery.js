//Adapted from
//https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-BasemapGallery.html

function BasemapGallery({id, view, label, setProps}) {
    console.log('BasemapGallery:', id, view, label);



    return <></>;
}

BasemapGallery.defaultProps = {
    position: 'top-right',
};
BasemapGallery.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     *  */
    id: PropTypes.string,

    /**
     *position of the basemap gallery. Defaults to top-right.
     * */
    position: PropTypes.string,

    /**
     *Indicates whether the widget is visible.
     **/
    visible: PropTypes.bool,

    /**
     * The widget's default label.
     * */
    label: PropTypes.string,

    //READ ONLY PROPS

    /**
     * Read-only. The current basemap name.
     */
    activeBaseMap: PropTypes.string,
};

export {BasemapGallery};
