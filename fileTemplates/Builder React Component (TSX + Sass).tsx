#set ($index = $NAME.indexOf('/'))
#set ($index = $index + 1)
#set ($NAME = $NAME.substring($index))

#set( $regex = "([a-z])([A-Z]+)")
#set( $replacement = "$1-$2")
#set( $DASH = $NAME.replaceAll($regex, $replacement).toLowerCase())

#set( $CAMEL = $NAME.substring(0, 1).toLowerCase() + $NAME.substring(1) )

import { moduleClassName } from '@/utils/stringManipulation'
import classes from './${NAME}.module.scss'

export interface ${NAME}Props {

}

export default function $NAME (props: ${NAME}Props) {

  return (
    <div className={moduleClassName(`$DASH`, classes)}>
      
    </div>
  )
}