import React, { useEffect } from 'react'
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom';
// import Image from '../images/InterviewMe.png'

function Cards() {

    const cardDetailsDefault = [
        {
            "id": 11,
            "title": "InterviewMe",
            "image": "../images/InterviewMe.png",
            "description": "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
            "date": "uploaded 6 days ago"
        },
        {
            "id": 12,
            "title": "Lorem ipsum",
            "image": "../images/Lorem ipsum.png",
            "description": "Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus egestas libero tristique nec.",
            "date": "uploaded 8 days ago"
        },
        {
            "id": 13,
            "title": "Potter ipsum",
            "image": "../images/Potter ipsum.png",
            "description": "Potter ipsum wand elf parchment wingardium. Ghost glass hall tears hair must train. Snape alohamora bathrooms.",
            "date": "uploaded 9 days ago"
        },
        {
            "id": 14,
            "title": "Pizza Impsum",
            "image": "../images/Pizza Ipsum.png",
            "description": "Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.",
            "date": "uploaded 12 days ago"
        },
        {
            "id": 15,
            "title": "Figma Ipsum",
            "image": "../images/Figma ipsum.png",
            "description": "Figma ipsum component variant main layer. Blur hand object thumbnail subtract flows font bold image. Font.",
            "date": "uploaded 16 days ago"
        },
        {
            "id": 16,
            "title": "Office Ipsum",
            "image": "../images/Office ipsum.png",
            "description": "Office ipsum you must be muted.",
            "date": "uploaded 28 days ago"
        },
    ]

    useEffect(() => {
        if (!localStorage.getItem('cardDetails'))
            localStorage.setItem('cardDetails', JSON.stringify(cardDetailsDefault));
    })

    const cardDetails = JSON.parse(localStorage.getItem('cardDetails')) || cardDetailsDefault;

    return (
        <div className="mt-12">
            <Grid container spacing={4}>
                {cardDetails.map((cardDetail) => (
                    <Grid item key={cardDetail.id} xs={12} sm={6} md={4}>
                        <Link to={`/card-details/${cardDetail.id}`}>
                            <Card className="h-full flex flex-col rounded-2xl">
                                <CardMedia className="pt-[56.26%]" image={cardDetail.image} title={cardDetail.title} />
                                <CardContent className="grow">
                                    <Typography varient="h4" gutterBottom>
                                        <p className='font-semibold'>{cardDetail.title}</p>
                                    </Typography>
                                    <Typography>
                                        <p className='text-sm'>{cardDetail.summary}</p>
                                    </Typography>
                                    <Typography className='flex justify-end py-4'>
                                        <p className='text-xs'>{cardDetail.date}</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cards
