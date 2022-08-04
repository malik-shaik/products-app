import { FC } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { ErrorType, Product as ProductType } from 'lib/use-search-products'
import { Product } from 'components/lading-page/products/product'
import { LoadingSpinner } from 'components/utils/loading-spinner'
import { NoProductsFound } from 'components/lading-page/products/no-products'

interface ResultsProps {
  products: ProductType[]
  loading: boolean
  error: ErrorType
}

export const Results: FC<ResultsProps> = ({ products, loading, error }) => {
  const classes = useStyles()

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <>Something went wrong please try again later</>
  }

  if (products.length === 0) {
    return <NoProductsFound />
  }

  return (
    <Box className={classes.container}>
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '70%',
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: {
        margin: 'auto',
        width: '90%',
        marginTop: 20,
        justifyContent: 'space-between',
      },
    },
  })
)
