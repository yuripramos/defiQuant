import React, { Suspense, useState, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import URLWarning from '../components/Header/URLWarning'
import Popups from '../components/Popups'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import PoolsOverview from './Pool/PoolsOverview'
import PoolPage from './Pool/PoolPage'
import { RedirectInvalidToken } from './Token/redirects'
import TokensOverview from './Token/TokensOverview'
import { LocalLoader } from 'components/Loader'
import { ExternalLink, TYPE } from 'theme'
import { useActiveNetworkVersion, useSubgraphStatus } from 'state/application/hooks'
import { DarkGreyCard } from 'components/Card'
import { SUPPORTED_NETWORK_VERSIONS, EthereumNetworkInfo, OptimismNetworkInfo } from 'constants/networks'
import './styles.css'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow-x: hidden;
  min-height: 100vh;
  background: rgb(4, 50, 3);
  background: linear-gradient(0deg, rgb(4 18 4) 0%, rgb(0 0 54) 100%, rgb(0 0 0) 100%);
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  width: 100%;
  position: fixed;
  justify-content: space-between;
  z-index: 2;
`

const BodyWrapper = styled.div<{ warningActive?: boolean }>`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  padding-top: 40px;
  margin-top: ${({ warningActive }) => (warningActive ? '140px' : '100px')};
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;

  > * {
    max-width: 1200px;
  }

  @media (max-width: 1080px) {
    padding-top: 2rem;
    margin-top: 140px;
  }
`

const Marginer = styled.div`
  margin-top: 5rem;
`

const MargemTop = styled.div`
  margin-top: 1rem;
`

const Hide1080 = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
`

const WarningWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const WarningBanner = styled.div`
  background-color: ${({ theme }) => theme.bg3};
  padding: 1rem;
  color: white;
  font-size: 14px;
  width: 100%;
  text-align: center;
  font-weight: 500;
`

const BLOCK_DIFFERENCE_THRESHOLD = 30

export default function App() {
  // pretend load buffer
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1300)
  }, [])

  // update network based on route
  // TEMP - find better way to do this
  const location = useLocation()
  const [activeNetwork, setActiveNetwork] = useActiveNetworkVersion()
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveNetwork(EthereumNetworkInfo)
    } else {
      SUPPORTED_NETWORK_VERSIONS.map((n) => {
        if (location.pathname.includes(n.route.toLocaleLowerCase())) {
          setActiveNetwork(n)
        }
      })
    }
  }, [location.pathname, setActiveNetwork])

  // subgraph health
  const [subgraphStatus] = useSubgraphStatus()

  const showNotSyncedWarning =
    subgraphStatus.headBlock && subgraphStatus.syncedBlock && activeNetwork === OptimismNetworkInfo
      ? subgraphStatus.headBlock - subgraphStatus.syncedBlock > BLOCK_DIFFERENCE_THRESHOLD
      : false

  return (
    <Suspense fallback={null}>
      <Route component={DarkModeQueryParamReader} />
      {loading ? (
        <LocalLoader fill={true} />
      ) : (
        <AppWrapper>
          <URLWarning />
          <HeaderWrapper>
            {showNotSyncedWarning && (
              <WarningWrapper>
                <WarningBanner>
                  {`Warning:
                  Data has only synced to  block ${subgraphStatus.syncedBlock} (out of ${subgraphStatus.headBlock}). Please check back soon.`}
                </WarningBanner>
              </WarningWrapper>
            )}
            <Header />
          </HeaderWrapper>
          {subgraphStatus.available === false ? (
            <AppWrapper>
              <BodyWrapper>
                <DarkGreyCard style={{ maxWidth: '340px' }}>
                  <TYPE.label>
                    The Graph hosted network which provides data for this site is temporarily experiencing issues. Check
                    current status{' '}
                    <ExternalLink href="https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v3">
                      here.
                    </ExternalLink>
                  </TYPE.label>
                </DarkGreyCard>
              </BodyWrapper>
            </AppWrapper>
          ) : (
            <BodyWrapper warningActive={showNotSyncedWarning}>
              <Popups />
              <Switch>
                <Route exact strict path="/:networkID?/pools/:address" component={PoolPage} />
                <Route exact strict path="/:networkID?/pools" component={PoolsOverview} />
                <Route exact strict path="/:networkID?/tokens/:address" component={RedirectInvalidToken} />
                <Route exact strict path="/:networkID?/tokens" component={TokensOverview} />
                <Route exact path="/:networkID?" component={PoolsOverview} />
              </Switch>
              <MargemTop />
            </BodyWrapper>
          )}
        </AppWrapper>
      )}
    </Suspense>
  )
}
