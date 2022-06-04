# AUTO GENERATED FILE - DO NOT EDIT

#' @export
mapView <- function(id=NULL, animation=NULL, basemap=NULL, center=NULL, style=NULL, type=NULL, viewPoint=NULL, widthBreakpoint=NULL, zoom=NULL) {
    
    props <- list(id=id, animation=animation, basemap=basemap, center=center, style=style, type=type, viewPoint=viewPoint, widthBreakpoint=widthBreakpoint, zoom=zoom)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MapView',
        namespace = 'dash_arcgis_open',
        propNames = c('id', 'animation', 'basemap', 'center', 'style', 'type', 'viewPoint', 'widthBreakpoint', 'zoom'),
        package = 'dashArcgisOpen'
        )

    structure(component, class = c('dash_component', 'list'))
}
