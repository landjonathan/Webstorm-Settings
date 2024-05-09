#set ($index = $NAME.indexOf('/'))
#set ($index = $index + 1)
#set ($NAME = $NAME.substring($index))
#set( $regex = "([a-z])([A-Z]+)")
#set( $replacement = "$1 $2")
#set( $SPACED = $NAME.replaceAll($regex, $replacement))

import { Builder } from '@builder.io/react'
import $NAME from './$NAME'

Builder.registerComponent($NAME, {
  name: '$SPACED',
  inputs: [
    {
      name: '',
      type: '',
    }
  ]
})