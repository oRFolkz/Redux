import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((product) => product.id === produto.id)) {
        alert('item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { addCart } = carrinhoSlice.actions
export default carrinhoSlice.reducer
