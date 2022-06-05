# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MapViewBase(Component):
    """A MapViewBase component.


Keyword arguments:

- id (optional)

- animation (optional):
    The ID used to identify this component in Dash callbacks.

- basemap (optional)

- center (optional)

- style (optional)

- type (optional)

- viewPoint (optional)

- widthBreakpoint (optional)

- zoom (optional)"""
    @_explicitize_args
    def __init__(self, animation=Component.UNDEFINED, basemap=Component.UNDEFINED, center=Component.UNDEFINED, id=Component.UNDEFINED, style=Component.UNDEFINED, type=Component.UNDEFINED, viewPoint=Component.UNDEFINED, widthBreakpoint=Component.UNDEFINED, zoom=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'animation', 'basemap', 'center', 'style', 'type', 'viewPoint', 'widthBreakpoint', 'zoom']
        self._type = 'MapViewBase'
        self._namespace = 'dash_arcgis_open'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'animation', 'basemap', 'center', 'style', 'type', 'viewPoint', 'widthBreakpoint', 'zoom']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MapViewBase, self).__init__(**args)
