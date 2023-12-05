# BoatAssetManager

## Task: Create a boat components tracking tool

Each boat component (mast, hull, rudder, etc ...) can be defined by its mass and centre of mass (x,y,z). Create a simple web app (no need for the data to persist out of the session scope, i.e. no need to have a server / database) to create / edit / delete these components. The boat's total mass and centre of mass will need to be calculated and displayed, and updated when a component is added or deleted. The UI should be reasonably good-looking and straightforward to use.

You can of course make use of any open-source library and/or JavaScript framework that may help you achieve that task. You'll be expected to show and explain how your app works, how you structured your code and what choices you made!

Additionally, you may have a go at one of the following bonus tasks (or at least think about the way you would implement the relevant feature):

Bonus 1: Add a 'read-only' mode so that the components and components list cannot be edited by default
Bonus 2: Add sorting on each column so that items can be sorted by weight or coordinate. Optional: add filters
Bonus 3: Add a chart to plot the component (and boat)'s COGs on the YZ plane. Optional: drag and drop components to move them around ...


## Checklist

- [ x ] A components object that has three attributes, mass, (xyz) of center of mass, name
- [ x ] Add a component
- [ ] Edit a component
- [ ] Delete a component
- [ ] Calculate boats total mass
- [ ] Calculate boats center of mass
- [ ] Sorting component columns
- [ ] Read only mode



