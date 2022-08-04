import { FC } from 'react'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { Search } from 'components/lading-page/search'
import { Results } from 'components/lading-page/results'
import { useSearchProducts } from 'lib/use-search-products'

export const LandingPage: FC = () => {
  const classes = useStyles()
  const { searchProducts, loading, error, products } = useSearchProducts()

  return (
    <Box className={classes.container}>
      <Search searchProducts={searchProducts} />
      <Results products={products} loading={loading} error={error} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: '3%',
      margin: 'auto',
      width: '90%',
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
  })
)
