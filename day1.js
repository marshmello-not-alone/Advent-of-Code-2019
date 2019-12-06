const add = (a, b) => a + b

const getFuelWeight = mass => Math.floor(mass / 3) - 2

const getTotalWeight = masses => masses.map(getFuelWeight).reduce(add, 0)

export const a = input => {
  const moduleWeights = input.split('\n')
  return getTotalWeight(moduleWeights)
}

const getFuelWeightRecursive = mass => {
  const fuel = getFuelWeight(mass)
  return fuel <= 0 ? 0 : fuel + getFuelWeightRecursive(fuel)
}

const getTotalWeightRecursive = masses =>
  masses.map(getFuelWeightRecursive).reduce(add, 0)

export const b = input => {
  const moduleWeights = input.split('\n')
  return getTotalWeightRecursive(moduleWeights)
}
