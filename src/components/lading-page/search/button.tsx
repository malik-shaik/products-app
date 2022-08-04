import { FC } from 'react'
import { makeStyles, createStyles, Button } from '@material-ui/core'
import { BsSearch } from 'react-icons/bs'

export const SearchButton: FC = () => {
  const classes = useStyles()

  return (
    <Button type="submit" className={classes.searchButton}>
      <BsSearch size={18} />
    </Button>
  )
}

const useStyles = makeStyles(
  createStyles({
    searchButton: {
      minWidth: 0,
      backgroundColor: '#0041ff',
      color: '#fff',
      borderRadius: '10px 0px 0px 10px',
      padding: 11,
      '&:hover': {
        padding: 12,
        backgroundColor: '#0041ff',
        color: '#fff',
      },
    },
  })
)
