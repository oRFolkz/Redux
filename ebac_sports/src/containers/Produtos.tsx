import { useGetProdutosQuery } from '../api/api'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = ({
  favoritos = []
}: {
  favoritos?: ProdutoType[]
}) => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (
    produto: ProdutoType,
    favoritos: ProdutoType[]
  ) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto, favoritos)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
