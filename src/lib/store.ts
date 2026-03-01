import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  user: any | null;
  role: string | null;
}

const initialState: AppState = {
  user: null,
  role: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: any, role: string }>) => {
      state.user = action.payload.user
      state.role = action.payload.role
    },
    logout: (state) => {
      state.user = null
      state.role = null
    }
  }
})

export const { setUser, logout } = authSlice.actions

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
