# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BasemapGallery(Component):
    """A BasemapGallery component.


Keyword arguments:

- id (optional):
    The ID used to identify this component in Dash callbacks.

- activeBaseMap (optional):
    Read-only. The current basemap name.

- label (optional):
    The widget's default label.

- position (default 'top-right'):
    position of the basemap gallery. Defaults to top-right.

- visible (optional):
    Indicates whether the widget is visible."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, position=Component.UNDEFINED, visible=Component.UNDEFINED, label=Component.UNDEFINED, activeBaseMap=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'activeBaseMap', 'label', 'position', 'visible']
        self._type = 'BasemapGallery'
        self._namespace = 'dash_arcgis_open'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'activeBaseMap', 'label', 'position', 'visible']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BasemapGallery, self).__init__(**args)
