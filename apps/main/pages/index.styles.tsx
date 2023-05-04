import { css } from '@emotion/css'

export const grid = css`
  display: grid;
  grid-template-areas:
    'header header header header'
    'main main . not-react';
  grid-template-rows: 1fr 5fr;
  height: 90vh;
`
export const header = css`
  grid-area: header;
  background-color: aliceblue;
`
export const main = css`
  grid-area: main;
  background-color: pink;
`
