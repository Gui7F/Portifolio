import React from 'react'
import { DeviconJavascript } from '../components/Icons'
import { DeviconReactnative } from '../components/Icons'
import { DeviconMongodb } from '../components/Icons'
import { DeviconNodejs } from '../components/Icons'
import { DeviconNpm } from '../components/Icons'
import { DeviconTypescript } from '../components/Icons'
import { DeviconVitejs } from '../components/Icons'
import { DeviconExpress } from '../components/Icons'
import { DeviconTailwindcss } from '../components/Icons'
import { DeviconPrisma } from '../components/Icons'
import { DeviconVscode } from '../components/Icons'
import { DeviconGit } from '../components/Icons'
const Stack = () => {
  return (
    <div>
      <DeviconJavascript icon="devicon:javascript" width="128" height="128" />
      <DeviconReactnative  icon="devicon:reactnative" width="128" height="128"/>
      <DeviconMongodb icon="devicon:mongodb" width="128" height="128"/>
      <DeviconNodejs icon="devicon:nodejs" width="128" height="128"/>
      <DeviconNpm icon="devicon:npm" width="128" height="128"/>
      <DeviconTypescript icon="devicon:npm" width="128" height="128"/>
      <DeviconVitejs icon="devicon:vite" width="128" height="128"/>
      <DeviconExpress icon="devicon:express" width="128" height="128"/>
      <DeviconTailwindcss icon="devicon:tailwind" width="128" height="128"/>
      <DeviconPrisma icon="devicon:prisma" width="128" height="128"/>
      {/* <DeviconVscode icon="devicon:vscode" width="128" height="128"/> */}
      <DeviconGit icon="devicon:prisma" width="128" height="128"/>
    </div>
  )
}

export default Stack