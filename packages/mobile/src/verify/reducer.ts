import { createAction } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/reducers'

export const start = createAction('START')
export const disableKomenci = createAction('DISABLE_KOMENCI')

type ActionTypes = typeof start

export enum StateType {
  Idle = 'Idle',
  PreparingKomenci = 'PreparingKomenci',
  FetchingPhoneNumberDetails = 'FetchingPhoneNumberDetails',
  DeployingMtw = 'DeployingMtw',
  FetchingVerificationOnChain = 'FetchingVerificationOnChain',
  EnsuringRealHumanUser = 'EnsuringRealHumanUser',
  Error = 'Error',
}

interface Idle {
  type: StateType.Idle
}
export const idle = (): Idle => ({ type: StateType.Idle })

interface PreparingKomenci {
  type: StateType.PreparingKomenci
}
// {}: Omit<PreparingKomenci, 'type'>
export const preparingKomenci = (): PreparingKomenci => ({
  type: StateType.PreparingKomenci,
})

interface EnsuringRealHumanUser {
  type: StateType.EnsuringRealHumanUser
}
export const ensuringRealHumanUser = (): EnsuringRealHumanUser => ({
  type: StateType.EnsuringRealHumanUser,
})

interface FetchingPhoneNumberDetails {
  type: StateType.FetchingPhoneNumberDetails
}
export const fetchingPhoneNumberDetails = (): FetchingPhoneNumberDetails => ({
  type: StateType.FetchingPhoneNumberDetails,
})

interface DeployingMtw {
  type: StateType.DeployingMtw
}
export const deployingMtw = (): DeployingMtw => ({
  type: StateType.DeployingMtw,
})

interface FetchingVerificationOnChain {
  type: StateType.FetchingVerificationOnChain
}
export const fetchingVerificationOnChain = (): FetchingVerificationOnChain => ({
  type: StateType.FetchingVerificationOnChain,
})

interface Error {
  type: StateType.Error
  message: string
}
export const error = (message: string): Error => ({
  type: StateType.Error,
  message,
})

type InternalState = Idle | PreparingKomenci | FetchingPhoneNumberDetails | Error

export interface State {
  isKomenciEnabled: boolean
  komenci: {
    errorTimestamps: number[]
    unverifiedMtwAddress: string | null
    serviceAvailable: boolean
    sessionActive: boolean
    sessionToken: string
    callbackUrl: string | undefined
    captchaToken: string
    pepperFetchedByKomenci: boolean
  }
  pepper?: string
  phoneHash?: string
  retries: number
  currentState: InternalState
}

const initialState: State = {
  isKomenciEnabled: true,
  komenci: {
    errorTimestamps: [],
    unverifiedMtwAddress: null,
    serviceAvailable: false,
    sessionActive: false,
    sessionToken: '',
    callbackUrl: undefined,
    captchaToken: '',
    pepperFetchedByKomenci: false,
  },
  retries: 0,
  currentState: idle(),
}

export const reducer = (state: State | undefined = initialState, action: ActionTypes): State => {
  const { isKomenciEnabled } = state
  switch (action.type) {
    case start.type: {
      return { ...state, currentState: isKomenciEnabled ? preparingKomenci() : idle() }
    }
    default:
      return state
  }
}

export const currentStateSelector = (state: RootState) => state.verify.currentState
export const komenciContextSelector = (state: RootState) => state.verify.komenci
