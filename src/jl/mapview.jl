# AUTO GENERATED FILE - DO NOT EDIT

export mapview

"""
    mapview(;kwargs...)

A MapView component.

Keyword arguments:
- `id` (String; optional)
- `animation` (Dict; optional): The ID used to identify this component in Dash callbacks.
- `basemap` (String; optional)
- `center` (Array; optional)
- `style` (Dict; optional)
- `type` (Dict; optional)
- `viewPoint` (Dict; optional)
- `widthBreakpoint` (String; optional)
- `zoom` (Real; optional)
"""
function mapview(; kwargs...)
        available_props = Symbol[:id, :animation, :basemap, :center, :style, :type, :viewPoint, :widthBreakpoint, :zoom]
        wild_props = Symbol[]
        return Component("mapview", "MapView", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

