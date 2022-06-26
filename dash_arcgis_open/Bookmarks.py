# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Bookmarks(Component):
    """A Bookmarks component.


Keyword arguments:

- id (optional):
    The ID used to identify this component in Dash callbacks.

- editingEnabled (default True):
    editingEnabled (boolean; optional): Indicates whether the
    bookmarks are able to be edited.

- label (optional):
    The widget's default label.

- position (default 'top-right'):
    position of the basemap gallery. Defaults to top-right. Possible
    values: 'bottom-leading', 'bottom-left', 'bottom-right',
    'bottom-trailing', 'top-leading', 'top-left', 'top-right',
    'top-trailing'. Default: 'top-right'.

- visible (optional):
    Indicates whether the widget is visible."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, position=Component.UNDEFINED, visible=Component.UNDEFINED, label=Component.UNDEFINED, editingEnabled=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'editingEnabled', 'label', 'position', 'visible']
        self._type = 'Bookmarks'
        self._namespace = 'dash_arcgis_open'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'editingEnabled', 'label', 'position', 'visible']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Bookmarks, self).__init__(**args)
