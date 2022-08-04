import { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Product as ProductType } from 'lib/use-search-products'

interface ProductProps {
  product: ProductType
}
export const Product: FC<ProductProps> = ({ product }) => {
  const classes = useStyles()

  return (
    <Box className={classes.product}>
      <img src={product.image} alt="product" className={classes.image} />
      <Typography className={classes.title}>{product.name}</Typography>
      <Typography className={classes.category}>
        Category: {product.category}
      </Typography>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    product: {
      margin: 15,
      width: 250,
      cursor: 'pointer',
      [theme.breakpoints.down('xs')]: {
        width: 100,
      },
    },
    image: {
      objectFit: 'cover',
      maxHeight: 200,
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        maxHeight: 100,
      },
    },
    title: {
      color: '#0041ff',
      fontWeight: 'bold',
      fontSize: '1.15rem',
    },
    category: {
      color: '#212529',
      fontWeight: 'lighter',
    },
  })
)
