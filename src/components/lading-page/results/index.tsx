import { FC } from 'react'
import { Box, createStyles, makeStyles } from '@material-ui/core'
import { ErrorType, Product as ProductType } from 'lib/use-search-products'
import { Product } from 'components/lading-page/results/product'

interface ResultsProps {
  products: ProductType[]
  loading: boolean
  error: ErrorType
}

export const Results: FC<ResultsProps> = ({ products, loading }) => {
  const classes = useStyles()

  if (loading) {
    return <>Loading....</>
  }

  if (loading) {
    return <>Error....</>
  }

  return (
    <Box className={classes.container}>
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </Box>
  )
}

const useStyles = makeStyles(
  createStyles({
    container: {
      width: '70%',
      display: 'flex',
      flexWrap: 'wrap',
      //   backgroundColor: 'grey',
    },
  })
)
