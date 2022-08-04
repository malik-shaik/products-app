import { FC } from 'react'
import { Box, createStyles, makeStyles } from '@material-ui/core'
import { ErrorType, Product as ProductType } from 'lib/use-search-products'
import { Product } from 'components/lading-page/results/product'
import { LoadingSpinner } from 'components/utils/loading-spinner'

interface ResultsProps {
  products: ProductType[]
  loading: boolean
  error: ErrorType
}

export const Results: FC<ResultsProps> = ({ products, loading }) => {
  const classes = useStyles()

  if (loading) {
    return <LoadingSpinner />
  }

  if (loading) {
    return <>Something went wrong please try again later</>
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
    },
  })
)
