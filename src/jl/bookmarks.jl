# AUTO GENERATED FILE - DO NOT EDIT

export bookmarks

"""
    bookmarks(;kwargs...)

A Bookmarks component.

Keyword arguments:
- `id` (optional): The ID used to identify this component in Dash callbacks.
- `editingEnabled` (optional): editingEnabled (boolean; optional): Indicates whether the bookmarks are able to be edited.
- `label` (optional): The widget's default label.
- `position` (optional): position of the basemap gallery. Defaults to top-right.
Possible values: 'bottom-leading', 'bottom-left', 'bottom-right', 'bottom-trailing', 'top-leading', 'top-left', 'top-right', 'top-trailing'. Default: 'top-right'.
- `visible` (optional): Indicates whether the widget is visible.
"""
function bookmarks(; kwargs...)
        available_props = Symbol[:id, :editingEnabled, :label, :position, :visible]
        wild_props = Symbol[]
        return Component("bookmarks", "Bookmarks", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

