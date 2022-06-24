# AUTO GENERATED FILE - DO NOT EDIT

export basemapgallery

"""
    basemapgallery(;kwargs...)

A BasemapGallery component.

Keyword arguments:
- `id` (optional): The ID used to identify this component in Dash callbacks.
- `activeBaseMap` (optional): Read-only. The current basemap name.
- `label` (optional): The widget's default label.
- `position` (optional): position of the basemap gallery. Defaults to top-right.
- `visible` (optional): Indicates whether the widget is visible.
"""
function basemapgallery(; kwargs...)
        available_props = Symbol[:id, :activeBaseMap, :label, :position, :visible]
        wild_props = Symbol[]
        return Component("basemapgallery", "BasemapGallery", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

