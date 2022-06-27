# AUTO GENERATED FILE - DO NOT EDIT

export webmap

"""
    webmap(;kwargs...)

A WebMap component.

Keyword arguments:
- `id` (optional)
- `basemap` (optional)
- `breakpoints` (optional)
- `center` (optional)
- `constraints` (optional)
- `extent` (optional)
- `heightBreakpoint` (optional)
- `portalItem` (optional)
- `style` (optional)
- `widthBreakpoint` (optional)
- `zoom` (optional)
"""
function webmap(; kwargs...)
        available_props = Symbol[:id, :basemap, :breakpoints, :center, :constraints, :extent, :heightBreakpoint, :portalItem, :style, :widthBreakpoint, :zoom]
        wild_props = Symbol[]
        return Component("webmap", "WebMap", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

