# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class WebMap(Component):
    """A WebMap component.


Keyword arguments:

- children (optional)

- id (optional)

- basemap (default 'topo-vector')

- breakpoints (optional)

- center (default [-118.24, 34.05])

- constraints (optional)

- extent (optional)

- heightBreakpoint (optional)

- portalItem (optional)

- style (optional)

- widthBreakpoint (optional)

- zoom (default 10)"""
    @_explicitize_args
    def __init__(self, children=None, basemap=Component.UNDEFINED, center=Component.UNDEFINED, zoom=Component.UNDEFINED, portalItem=Component.UNDEFINED, id=Component.UNDEFINED, style=Component.UNDEFINED, breakpoints=Component.UNDEFINED, extent=Component.UNDEFINED, constraints=Component.UNDEFINED, widthBreakpoint=Component.UNDEFINED, heightBreakpoint=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'basemap', 'breakpoints', 'center', 'constraints', 'extent', 'heightBreakpoint', 'portalItem', 'style', 'widthBreakpoint', 'zoom']
        self._type = 'WebMap'
        self._namespace = 'dash_arcgis_open'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'basemap', 'breakpoints', 'center', 'constraints', 'extent', 'heightBreakpoint', 'portalItem', 'style', 'widthBreakpoint', 'zoom']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(WebMap, self).__init__(children=children, **args)
