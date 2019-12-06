import assertDefaultExport from 'assert'
import fs from 'fs'

export const readInput = day =>
  fs.readFileSync(`./day${day}.txt`, { encoding: 'utf8' })

export const assert = assertDefaultExport
