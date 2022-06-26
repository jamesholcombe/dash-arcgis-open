# AUTO GENERATED FILE - DO NOT EDIT

export editor

"""
    editor(;kwargs...)

An Editor component.

Keyword arguments:
- `id` (optional): The ID used to identify this component in Dash callbacks.
- `label` (optional): The widget's default label.
- `position` (optional): position of the basemap gallery. Defaults to top-right.
- `visible` (optional): Indicates whether the widget is visible.
"""
function editor(; kwargs...)
        available_props = Symbol[:id, :label, :position, :visible]
        wild_props = Symbol[]
        return Component("editor", "Editor", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

