# AUTO GENERATED FILE - DO NOT EDIT

#' @export
mapView <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'MapView',
        namespace = 'dash_arcgis_open',
        propNames = c('id'),
        package = 'dashArcgisOpen'
        )

    structure(component, class = c('dash_component', 'list'))
}
