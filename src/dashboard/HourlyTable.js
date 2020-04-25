import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'

export default function HourlyTable({ state }) {
  const { hourly } = state.weather
  return (
    <React.Fragment>
      <Title>Right Now</Title>
      <Table>
        <TableBody>
          <TableRow hover={true}>

          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
