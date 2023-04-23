import { useGamba } from 'gamba'
import React from 'react'
import styled from 'styled-components'
import { getConfig } from '../config'
import { ASSET_LOGO } from '../constants'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  padding: 20px 40px;
  color: white;
  text-align: left;
  display: flex;
  gap: 20px;
  align-items: center;
  z-index: 1;
`

const Link = styled.a`
  text-decoration: unset;
  color: unset;
  font-weight: bold;
  display: flex;
  align-items: center;
  & > img {
    margin-right: 1em;
  }
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`

const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 14px;
  color: #ccc;
`

export function Header() {
  const { appLink } = getConfig()
  const gamba = useGamba()

  return (
    <Wrapper>
      <Link target="_blank" href={appLink ?? '#'}>
        <img width="50px" src={ASSET_LOGO} />
        <div>
          <Title>{gamba.config.name}</Title>
          <Subtitle>froggo.lol</Subtitle>
        </div>
      </Link>
    </Wrapper>
  )
}
