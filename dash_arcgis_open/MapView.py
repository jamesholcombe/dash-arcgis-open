# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MapView(Component):
    """A MapView component.


Keyword arguments:

- children (list of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional):
    Children of the map view, these are normally layers.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- basemap (string; default 'streets-navigation-vector'):
    basemap (a value equal to: 'topo', 'streets', 'satelite',
    'hybrid', 'dark-gray', 'gray', 'national-geographic', 'oceans',
    'osm', 'terrain', 'dark-gray-vector', 'gray-vector',
    'streets-vector', 'streets-night-vector',
    'streets-navigation-vector', 'topo-vector' or
    'streets-relief-vector'; default 'gray-vector'): The basemap type.
    Commonly 'gray-vector',. The ID used to identify this component in
    Dash callbacks.

- breakpoints (dict; default {    xsmall: 544,    small: 768,    medium: 992,    large: 1200,    xlarge: 1600,}):
    breakpoints (dict): The breakpoints for the view. Simple
    implementation of the below.
    https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#breakpoints.

- center (list; default [0.13, 51.51]):
    center (list; default [-168, 46]): Represents the view's center
    point; when setting the center, pass an array of numbers
    representing a longitude/latitude pair ([-100.4593, 36.9014]).

- constraints (dict; optional):
    Basic implementation of the below.
    https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#constraints.

- extent (dict; optional):
    extent (dict): dictionary of the form {xmin, ymin, xmax, ymax}
    that represents the extent of the map. Spatial reference is
    assumed to be the same as the map view's spatial reference. When
    extent is directly set, zoom and center will be overridden. Based
    on
    https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#extent.

- heightBreakpoint (string; optional):
    heightBreakpoint (string) : Possible
    Values:\"xsmall\"|\"small\"|\"medium\"|\"large\"|\"xlarge\".

- highlightOptions (dict; optional):
    highlightOptions (dict): Basic implementation of the below.
    https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#highlightOptions.

- orientation (string; optional):
    orientation (string): Either 'landscape' or 'portrait'. READONLY:
    implementation of the below.
    https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#loaded.

- resizeAlign (string; default 'center'):
    resizeAlign (string): implementation of
    https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#resizeAlign
    Defines which anchor stays still while resizing the browser
    window. The default, center, ensures the view's center point
    remains constantly visible as the window size changes. The other
    options allow the respective portion of the view to remain visible
    when the window's size is changed.Possible
    Values:\"center\"|\"left\"|\"right\"|\"top\"|\"bottom\"|\"top-left\"|\"top-right\"|\"bottom-left\"|\"bottom-right\".

- style (dict; optional)

- widthBreakpoint (string; optional):
    widthBreakpoint (string) : Possible
    Values:\"xsmall\"|\"small\"|\"medium\"|\"large\"|\"xlarge\".

- zoom (number; default 10):
    zoom (number; default 10): Represents the view's zoom level.
    Setting manually will override the extent."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, basemap=Component.UNDEFINED, breakpoints=Component.UNDEFINED, center=Component.UNDEFINED, constraints=Component.UNDEFINED, extent=Component.UNDEFINED, heightBreakpoint=Component.UNDEFINED, highlightOptions=Component.UNDEFINED, orientation=Component.UNDEFINED, resizeAlign=Component.UNDEFINED, style=Component.UNDEFINED, widthBreakpoint=Component.UNDEFINED, zoom=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'basemap', 'breakpoints', 'center', 'constraints', 'extent', 'heightBreakpoint', 'highlightOptions', 'orientation', 'resizeAlign', 'style', 'widthBreakpoint', 'zoom']
        self._type = 'MapView'
        self._namespace = 'dash_arcgis_open'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'basemap', 'breakpoints', 'center', 'constraints', 'extent', 'heightBreakpoint', 'highlightOptions', 'orientation', 'resizeAlign', 'style', 'widthBreakpoint', 'zoom']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MapView, self).__init__(children=children, **args)
