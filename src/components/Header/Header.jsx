import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { setTheme } from 'lib/redux/modules/theme';
import { useTheme } from '@emotion/react';

const Header = () => {
  const etheme = useTheme();
  const dispatch = useDispatch();
  const { theme } = useSelector(
    (state) => ({
      theme: state.theme
    }),
    shallowEqual
  );

  const [currentTheme, setCurrentTheme] = React.useState('light')

  const onClickTheme = (targetTheme) => {
    if (targetTheme == null) return;
    dispatch(setTheme(targetTheme))
    setCurrentTheme(targetTheme)
  }

  // use 'light' theme on initial render.
  // in real use cases, you would query the user's theme preference here,
  // or use the state retruned at user login
  React.useEffect(() => {
    setCurrentTheme('light')
    dispatch(setTheme('light'))
  }, [])

  return (
    <div css={etheme.header}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <span>
            NEXT-RED-EMO-MAT
          </span>
          <div css={etheme.headerButtons}>
            <Button
              color="secondary"
              variant="outlined"
              disabled={currentTheme === 'light'}
              onClick={() => onClickTheme('light')}>
              LIGHT
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              disabled={currentTheme === 'dark'}
              onClick={() => onClickTheme('dark')}>
              DARK
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              disabled={currentTheme === 'teal'}
              onClick={() => onClickTheme('teal')}>
              TEAL
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header