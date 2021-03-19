import React, { FC } from 'react'
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { Grid } from '@material-ui/core';
import { css } from '@emotion/react';
import TextPlaceholder from 'components/TextPlaceholder/TextPlaceholder'

const REM = '/red-emo-mat.jpg'

const Index: FC = () => {
  const etheme: any = useTheme();

  return (
    <main>
      <div css={etheme.body}>
        <div css={etheme.mainRaised}>
          <div css={etheme.container}>
            <Grid container justify="center" spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div css={etheme.title}>
                  next - red - emo - mat
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Image src={REM} width={450} height={300} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} >
                <TextPlaceholder />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Index