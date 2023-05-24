import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MediaQueryFeatures } from 'react-responsive'

interface ScreenState {
  screenSize: MediaQueryFeatures | null
}

const initialState: ScreenState = {
  screenSize: null
}

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setScreenSize: (state, action: any) => (state.screenSize = action?.payload)
  }
})

export const { setScreenSize } = screenSlice.actions

export default screenSlice.reducer
