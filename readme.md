put unit tests in test
put integration tests in spec

a slotset has many slots
slots control polarity, cost, and mod

a weapon/warframe will visit the slots in a slot set
each mod will accept the weapon/warframe/sentinel/kubrow and mutate it

a weapon holds multiple weaponstats
weapon stats will control dps etc
this is for weapons with multiple firing modes

a weapon/warframe can be newed up to get defaults
throw it into the visitors to get a new mutated one

a build has a slot set
a build has a mutated buildable item
the buildable items holds data like dps total affect of mods
the build acts as a gateway to redux

a build has a potato
a build keeps track of forma count
a build has a mod set
a build mutates the mod set and plucks mods out when added

react will use the build to control user interaction with the app
react will use the mutated weapon to show stats

Mods all have POSITIVE values
Auras and stances have POSITIVE values
Mod slots provide NEGATIVE values
