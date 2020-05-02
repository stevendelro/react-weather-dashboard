import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

function SearchPage({ location, setLocation, submitHandler }) {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth='lg' className={classes.container}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={3}>
          <Grid item xs={12} md={8} lg={6}>
            <form onSubmit={submitHandler}>
              <FormControl
                fullWidth
                className={classes.margin}
                variant='outlined'>
                <OutlinedInput
                  id='outlined-adornment-amount'
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  startAdornment={
                    <InputAdornment position='start'>
                      <SearchIcon color='disabled' />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default SearchPage
