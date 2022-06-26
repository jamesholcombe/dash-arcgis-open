function __GeoJSONLayer({id, url}) {
    return <> </>;
}

__GeoJSONLayer.defaultProps = {};

__GeoJSONLayer.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    url: PropTypes.string,

    // blendMode: PropTypes.string,

    // capabilities: PropTypes.object,

    // copyright: PropTypes.string,

    // declaredClass: PropTypes.string,

    // definitionExpression: PropTypes.string,

    // displayField: PropTypes.string,

    // effect: PropTypes.object,

    // elevationInfo: PropTypes.object,

    // featureReduction: PropTypes.object,

    // fields: PropTypes.arrayOf(PropTypes.object),

    // fieldsIndex: PropTypes.object,

    // fullExtent: PropTypes.object,

    // geometryType: PropTypes.string,

    // hasZ: PropTypes.bool,

    // labelingInfo: PropTypes.arrayOf(PropTypes.object),

    // labelsVisible: PropTypes.bool,

    // legendEnabled: PropTypes.bool,

    // listMode: PropTypes.string,

    // loaded: PropTypes.bool,

    // loadError: PropTypes.object,

    // loadStatus: PropTypes.string,

    // loadWarnings: PropTypes.arrayOf(PropTypes.object),

    // maxScale: PropTypes.number,

    // minScale: PropTypes.number,

    // objectIdField: PropTypes.string,

    // opacity: PropTypes.number,

    // orderBy: PropTypes.arrayOf(PropTypes.object),

    // outFields: PropTypes.arrayOf(PropTypes.string),

    // popupEnabled: PropTypes.bool,

    // popupTemplate: PropTypes.object,

    // renderer: PropTypes.object,

    // screenSizePerspectiveEnabled: PropTypes.bool,

    // spatialReference: PropTypes.object,

    // templates: PropTypes.arrayOf(PropTypes.object),

    // timeExtent: PropTypes.object,

    // timeInfo: PropTypes.object,

    // timeOffset: PropTypes.number,

    // title: PropTypes.string,

    // type: PropTypes.string,

    // url: PropTypes.string,

    // useViewTime: PropTypes.bool,

    // visible: PropTypes.bool,
};

export {__GeoJSONLayer as GeoJSONLayer};
