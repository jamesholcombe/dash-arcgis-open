# AUTO GENERATED FILE - DO NOT EDIT

#' @export
mapView <- function(id=NULL, style=NULL) {
    
    props <- list(id=id, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MapView',
        namespace = 'dash_arcgis_open',
        propNames = c('id', 'style'),
        package = 'dashArcgisOpen'
        )

    structure(component, class = c('dash_component', 'list'))
}
