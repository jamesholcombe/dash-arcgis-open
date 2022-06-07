# AUTO GENERATED FILE - DO NOT EDIT

export mapview

"""
    mapview(;kwargs...)
    mapview(children::Any;kwargs...)
    mapview(children_maker::Function;kwargs...)


A MapView component.

Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional): Children of the map view, these are normally layers.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `basemap` (String; optional): basemap (a value equal to: 'topo', 'streets', 'satelite', 'hybrid', 'dark-gray', 'gray', 'national-geographic', 'oceans', 'osm', 'terrain', 'dark-gray-vector', 'gray-vector', 'streets-vector', 'streets-night-vector', 'streets-navigation-vector', 'topo-vector' or 'streets-relief-vector'; default 'gray-vector'): The basemap type. Commonly 'gray-vector',. The ID used to identify this component in Dash callbacks.
- `breakpoints` (Dict; optional): breakpoints (dict): The breakpoints for the view. Simple implementation of the below.
     https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#breakpoints
- `center` (Array; optional): center (list; default [-168, 46]): Represents the view's center point; when setting the center, pass an array of numbers representing a longitude/latitude pair ([-100.4593, 36.9014]).
- `constraints` (Dict; optional): Basic implementation of the below.
     https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#constraints
- `extent` (Dict; optional): extent (dict): dictionary of the form {xmin, ymin, xmax, ymax} that represents the extent of the map.
Spatial reference is assumed to be the same as the map view's spatial reference.
When extent is directly set, zoom and center will be overridden.
Based on https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#extent
- `heightBreakpoint` (String; optional): heightBreakpoint (string) : Possible Values:"xsmall"|"small"|"medium"|"large"|"xlarge"
- `highlightOptions` (Dict; optional): highlightOptions (dict): Basic implementation of the below.
https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#highlightOptions
- `orientation` (String; optional): orientation (string): Either 'landscape' or 'portrait'.
READONLY: implementation of the below.
https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#loaded
- `resizeAlign` (String; optional): resizeAlign (string): implementation of https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#resizeAlign
Defines which anchor stays still while resizing the browser window. The default, center, ensures the view's center point remains constantly visible as the window size changes. The other options allow the respective portion of the view to remain visible when the window's size is changed.Possible Values:"center"|"left"|"right"|"top"|"bottom"|"top-left"|"top-right"|"bottom-left"|"bottom-right"
- `style` (Dict; optional)
- `widthBreakpoint` (String; optional): widthBreakpoint (string) : Possible Values:"xsmall"|"small"|"medium"|"large"|"xlarge"
- `zoom` (Real; optional): zoom (number; default 10): Represents the view's zoom level. Setting manually will override the extent.
"""
function mapview(; kwargs...)
        available_props = Symbol[:children, :id, :basemap, :breakpoints, :center, :constraints, :extent, :heightBreakpoint, :highlightOptions, :orientation, :resizeAlign, :style, :widthBreakpoint, :zoom]
        wild_props = Symbol[]
        return Component("mapview", "MapView", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

mapview(children::Any; kwargs...) = mapview(;kwargs..., children = children)
mapview(children_maker::Function; kwargs...) = mapview(children_maker(); kwargs...)

