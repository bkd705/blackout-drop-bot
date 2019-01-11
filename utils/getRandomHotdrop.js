const hotdrops = [
  'Array',
  'Nuketown',
  'Estates Main',
  'Estates Small',
  'Construction Site',
  'Hijacked',
  'Cargo',
  'Firing Range',
  'Fracking Tower',
  'Factory',
  'Train Station',
  'Rivertown',
  'Hydro',
  'Asylum',
  'Turbine',
  'Lighthouse'
]

module.exports = () => hotdrops[Math.floor(Math.random() * hotdrops.length)]
