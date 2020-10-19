# HDS Icon Library

This is the source repository for the official icon set for the HERE Design System

The icons are designed under the HDS guidelines.


At HERE we differentiate between **UI icons** and **Carto icons**. 

```
The differentiation between Carto and UI Icons is currently under review. The aim is to merge both into one single grouping. Reason is that Carto POI icons should be the 16px variation of UI POI icons. We encounter two blockers in merging these two variations:

	1. Current UI icon guidelines do not allow for legible icons to be produced at small sizes such 16px.
	2. Current HARP build scales icons against zoom level, which brings icons off the pixel grid whatever the size they have been created. The existing Carto collection tries to minimize this issue. From our point of view, there is no benefit in scaling the icons against zoom level. Displaying them at a fixed size would improve rendering sharpness, and therefore legibility. 
```

```
Actually, at HERE Technologies we have quite a colorful family of icons that expands way beyond Cartography POIs and UI iconography. 
Most of those icons are more complex than the CARTO / UI variations. We are reviewing all those assets and trying to normalize them as much as possible before making them widely available. So stay tunned!
```
 
 
## Carto POI icons

These icons are used exclusively on our maps. They represent **points of interests (POI)**, namely, a particular place in a defined location that can be categorized. (i.e. Hospitals, Parking garages, Museums, etc.) These are the icons you can see when browsing the map or performing a map search request. These icons are optimized for the display on a map, where these elements are rendered at a ver small size, and therefore shouldn’t be used in other contexts.

* Whenever a place is displayed on a map, the Places Category System [^1] defines which carto icon is representing it.

* The Places Categroy System assignment table is availabe as .excel and .cvs files in the Carto/POI folder (PDS Cattegory Assignment)[^2]. 

## UI icons

UI icons are visual representations of objects, services, tools and functionalities. They enhance the user experience by offering an intuitive visual cue to actions and content in general.

UI icons can be used together with other UI elements to make the content easier to understand. 


#### Stylistic variations
24px UI icons are availabe in 2 different stylistic variations:

* Solid
* Outline

The choice to use one over the other is a matter of aesthetic praeference. 

#### Categories
UI iconography has been grouped in categories with the aim of make it easier to browse through this extense collection. 

* Core-UI
* Devices-Sensors
* Discovery-Sharing
* Map-View
* Misc
* Navigation-Image
* POI
* Social
* Stats
* Tools
* Travel-Transport-Tracking
* Weather


These categories are only orientative. Choose your UI icons using your own good judgement for the needs of your product.

## Guidance icons

Guidance icons are designed to be used in turn-by-turn navigation applications.

* lane_assistance
	* directions
		* set_1
		* set_2
	* dividers
	* lanes
* manoeuvers
	* wego_fallback_roundabout
* speed_limit




# Icon Sizes

Icon Type      |80px| 24px | 16px | 8px
:------------- |:---:|:----:|:----:|:---:
Carto.         |-    |✓    |-      |-
UI Solid       |-    |✓    |✓      |Edge cases
UI Outline     |-    |✓    |-      |-
UI Outline     |-    |✓    |-      |-
Guidance Icons[^3] |✓    |-    |-      |-



[^1]: POI icons follows the primary category system used for **HERE Geocoding and Search API**. Read the [developer guide](https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics-places/places-category-system-full.html) on how to use the category system in your project.

[^2]: The assignment (available as excel cvs and jason file) of the icons and colors to the categories are delivered with the respective map style

[^3]: Speed-Limit: 96px. Lane Assistance/dividers: 16x80px








