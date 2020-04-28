import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function ErrorDialogue({ errorMessage, searchedTerm }) {
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
    window.location.reload()
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{'An Error Occured'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {errorMessage}
            <br />
            {searchedTerm
              ? `Maybe it had something to do with searching for "${searchedTerm}"`
              : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' >
            Try Again
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
