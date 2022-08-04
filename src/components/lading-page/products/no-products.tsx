import { makeStyles, Typography, createStyles } from '@material-ui/core'
import { FC } from 'react'

export const NoProductsFound: FC = () => {
  const classes = useStyles()

  return (
    <Typography className={classes.noProducts}>
      No products found. Please search again.
    </Typography>
  )
}

const useStyles = makeStyles(
  createStyles({
    noProducts: {
      margin: 'auto',
      marginTop: 30,
    },
  })
)
