# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GeoJSONLayer(Component):
    """A GeoJSONLayer component.


Keyword arguments:

- id (optional):
    The ID used to identify this component in Dash callbacks.

- url (optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, url=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'url']
        self._type = 'GeoJSONLayer'
        self._namespace = 'dash_arcgis_open'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'url']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GeoJSONLayer, self).__init__(**args)
