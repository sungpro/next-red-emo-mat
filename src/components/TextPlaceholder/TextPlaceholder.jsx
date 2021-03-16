import React from 'react'
import { css } from '@emotion/react';

const TextPlaceholder = () => {

  const loremIpsum =
  `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
  urna elementum, consectetur sem sed, sagittis nulla. Morbi molestie nisi
  quis ipsum dapibus pretium. Duis eros risus, consectetur eget ante ut,
  ultricies blandit ipsum. Nullam congue, lectus id blandit tincidunt, arcu
  urna molestie erat, eu porttitor lacus est quis ipsum. Donec malesuada
  sollicitudin mi ut egestas. Curabitur et libero vitae ante finibus
  vulputate ut eget sem. Duis et lectus varius ipsum sodales efficitur et in
  ex. In justo purus, interdum eu purus a, semper efficitur enim. Morbi
  venenatis in nisi id luctus. Donec venenatis, tellus a congue molestie,
  sapien libero tristique libero, id tempus nibh lacus sed urna. Quisque
  volutpat, massa eu placerat efficitur, lacus felis cursus dolor, nec
  tempor diam quam in elit. Donec vitae dui eget mauris imperdiet tempus.
  Duis rutrum viverra leo sit amet lacinia. Maecenas ut vehicula dui, a
  efficitur elit. In finibus semper lacus, nec viverra eros tempus sed. Sed
  ac tortor lacus. Praesent accumsan mollis lorem ac sagittis. Fusce
  lobortis commodo odio, sed faucibus dolor gravida sed. Nam venenatis
  tortor nec consequat lobortis. Phasellus pulvinar, eros fermentum aliquam
  luctus, leo mi porta ipsum, a auctor tellus nulla quis nisl. Suspendisse
  metus ligula, tincidunt ac sodales vitae, molestie eu mi.
  `

  return (
    <div css={css`{text-align: left}`}>
      { loremIpsum }
    </div>
  )
}

export default TextPlaceholder