import * as React from 'react'
import { navigate } from 'gatsby'
import {
  GridListTile,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import '../theme/typography.css'

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    background: theme.palette.background.paper,
  },
}))

const DodgerTypography = withStyles({
  root: {
    fontFamily: 'dodger'
  }
})(Typography);


const CarCard = (props) => {

  const { car, issold } = props
  const classes = useStyles()
  return (
    <GridListTile {...props}>
      <Card className={classes.cardRoot}
        onClick={
          () => {
            navigate(`/explore/car/${car.id.slice(1)}`)
          }}>
        <CardActionArea >
          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={`../cars/${car.id.slice(1)}.png`}
            title={car.id}
          />
          <CardContent className={classes.cardContent}>
            <DodgerTypography gutterBottom variant='h5' component='h2'>
              {`${car.id}`} {issold ? 'SOLD!' : ''}
            </DodgerTypography>
          </CardContent>
        </CardActionArea>
      </Card>
    </GridListTile>
  )
}

export default CarCard
