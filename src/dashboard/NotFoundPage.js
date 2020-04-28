import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '500px',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

function NotFoundPage() {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ErrorOutlineIcon fontSize='large' />
              <Typography
                align='center'
                color='error'
                varient='h1'
                component='div'>
                An error occured!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default NotFoundPage
