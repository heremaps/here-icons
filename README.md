# Icons by HERE Technologies

This is the source repository for the official icon set from HERE Technologies.

The icons are designed under the HERE design guidelines.


At HERE we differentiate between **UI icons** and **Carto icons**. 
 
 
## Carto icons

Carto icons are used exclusively on our maps. They represent **points of interests (POI)**, namely, a particular place in a defined location that can be categorized. (i.e. Hospitals, Parking garages, Museums, etc.) These are the icons you can see when browsing the map or performing a map search request. These icons are optimized for the display on a map, where these elements are rendered at a ver small size, and therefore shouldn’t be used in other contexts.

* Whenever a place is displayed on a map, the Places Category System [^1] defines which carto icon is representing it.

* The Places Categroy System assignment table is availabe as .excel and .cvs files in the Carto/POI folder (PDS Cattegory Assignment)[^2]. 

## UI icons

UI icons are visual representations of objects, services, tools and functionalities. They enhance the user experience by offering an intuitive visual cue to actions and content in general.

UI icons can be used together with other UI elements to make the content easier to understand. 


#### Stylistic variations
24px UI icons are availabe in 2 different stylistic variations:

* Solid
* Outline

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








