import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoriteState = {
  itens: Produto[]
}

const initialState: FavoriteState = {
  itens: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((product) => product.id === produto.id)) {
        state.itens = state.itens.filter((product) => product.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { addFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
