import { ChangeEvent, FC, SyntheticEvent, useState } from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  TextField,
  Theme,
} from '@material-ui/core'
import { SearchButton } from 'components/lading-page/search/button'

type EventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface SearchProps {
  searchProducts: (searchText: string) => void
}
export const Search: FC<SearchProps> = ({ searchProducts }) => {
  const classes = useStyles()
  const [searchText, setSearchText] = useState<string>('')

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault()
    searchProducts(searchText)
  }

  const handleInputChange = (evt: EventType) => {
    setSearchText(evt.target.value)
  }

  return (
    <Box className={classes.container}>
      <form onSubmit={handleSubmit}>
        <SearchButton />
        <TextField
          className={classes.textField}
          variant="outlined"
          size="small"
          fullWidth
          name={searchText}
          onChange={(evt: EventType) => handleInputChange(evt)}
        />
      </form>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 10,
      width: '35%',
      display: 'flex',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
        justifyContent: 'center',
      },
    },
    textField: {
      marginLeft: 10,
      color: '#212529',
      width: '22vw',
      [theme.breakpoints.down('sm')]: {
        width: '70vw',
      },
    },
  })
)
