import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import PropTypes from 'prop-types'

const CharacterCard = ({name, imgUrl, description}) => {
    return (
        <Card sx={{ width: 300, height: 350 }}>
            <CardActionArea>
                <Typography gutterBottom variant='h5' component='div'>
                    {name}
                </Typography>
                <CardMedia
                    component='img'
                    height='140'
                    image={imgUrl}
                    alt='green iguana'
                />
                <CardContent>
                    <Typography variant='body2' color='text.secondary'>
                       {description || "A marvel character"}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default CharacterCard
