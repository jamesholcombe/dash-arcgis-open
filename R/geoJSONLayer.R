# AUTO GENERATED FILE - DO NOT EDIT

#' @export
geoJSONLayer <- function(id=NULL, url=NULL) {
    
    props <- list(id=id, url=url)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GeoJSONLayer',
        namespace = 'dash_arcgis_open',
        propNames = c('id', 'url'),
        package = 'dashArcgisOpen'
        )

    structure(component, class = c('dash_component', 'list'))
}
