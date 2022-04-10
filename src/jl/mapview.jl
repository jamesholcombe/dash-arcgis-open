# AUTO GENERATED FILE - DO NOT EDIT

export mapview

"""
    mapview(;kwargs...)

A MapView component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `style` (Dict; optional)
"""
function mapview(; kwargs...)
        available_props = Symbol[:id, :style]
        wild_props = Symbol[]
        return Component("mapview", "MapView", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

