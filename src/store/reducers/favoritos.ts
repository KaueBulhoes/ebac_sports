import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itensFavoritos: Produto[]
}

const initialState: FavoritoState = {
  itensFavoritos: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itensFavoritos.find((p) => p.id === produto.id)) {
        state.itensFavoritos = state.itensFavoritos.filter(
          (p) => p.id !== produto.id
        )
      } else {
        state.itensFavoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritarSlice.actions
export default favoritarSlice.reducer
