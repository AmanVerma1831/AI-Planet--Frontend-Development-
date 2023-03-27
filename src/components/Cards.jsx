import React, { useEffect } from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom';

function Cards(props) {

    const cardDetailsDefault = [
        {
            "id": 11,
            "title": "InterviewMe",
            "image": "../images/InterviewMe.png",
            "favourite": false,
            "summary": "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
            "description": `Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor.

            Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.
            
            Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2023-03-26",
            "endDate": "2023-05-26",
            "gitHub": "https://github.com/username/projectname/releases",
            "links": "https://drive.google.com/file/d/csdkbcsdbCJKD_skjaa122xs/view",
            "date": "uploaded 6 days ago"
        },
        {
            "id": 12,
            "title": "Lorem ipsum",
            "image": "../images/Lorem ipsum.png",
            "favourite": false,
            "summary": "Lorem ipsum dolor sit amet consectetur. Auctor nibh eleifend tempus egestas libero tristique nec.",
            "description": `Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor.

            Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.
            
            Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2023-03-26",
            "endDate": "2023-05-26",
            "gitHub": "https://github.com/username/projectname/releases",
            "links": "https://drive.google.com/file/d/csdkbcsdbCJKD_skjaa122xs/view",
            "date": "uploaded 8 days ago"
        },
        {
            "id": 13,
            "title": "Potter ipsum",
            "image": "../images/Potter ipsum.png",
            "favourite": false,
            "summary": "Potter ipsum wand elf parchment wingardium. Ghost glass hall tears hair must train. Snape alohamora bathrooms.",
            "description": `Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor.

            Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.
            
            Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2023-03-26",
            "endDate": "2023-05-26",
            "gitHub": "https://github.com/username/projectname/releases",
            "links": "https://drive.google.com/file/d/csdkbcsdbCJKD_skjaa122xs/view",
            "date": "uploaded 9 days ago"
        },
        {
            "id": 14,
            "title": "Pizza Impsum",
            "image": "../images/Pizza Ipsum.png",
            "favourite": false,
            "summary": "Pizza ipsum dolor meat lovers buffalo. Burnt melted NY.",
            "description": `Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor.

            Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.
            
            Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2023-03-26",
            "endDate": "2023-05-26",
            "gitHub": "https://github.com/username/projectname/releases",
            "links": "https://drive.google.com/file/d/csdkbcsdbCJKD_skjaa122xs/view",
            "date": "uploaded 12 days ago"
        },
        {
            "id": 15,
            "title": "Figma Ipsum",
            "image": "../images/Figma ipsum.png",
            "favourite": false,
            "summary": "Figma ipsum component variant main layer. Blur hand object thumbnail subtract flows font bold image. Font.",
            "description": `Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor.

            Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.
            
            Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2023-03-26",
            "endDate": "2023-05-26",
            "gitHub": "https://github.com/username/projectname/releases",
            "links": "https://drive.google.com/file/d/csdkbcsdbCJKD_skjaa122xs/view",
            "date": "uploaded 16 days ago"
        },
        {
            "id": 16,
            "title": "Office Ipsum",
            "image": "../images/Office ipsum.png",
            "summary": "Office ipsum you must be muted.",
            "favourite": false,
            "description": `Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor.

            Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.
            
            Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2023-03-26",
            "endDate": "2023-05-26",
            "gitHub": "https://github.com/username/projectname/releases",
            "links": "https://drive.google.com/file/d/csdkbcsdbCJKD_skjaa122xs/view",
            "date": "uploaded 28 days ago"
        },
    ]

    useEffect(() => {
        if (!localStorage.getItem('cardDetails'))
            localStorage.setItem('cardDetails', JSON.stringify(cardDetailsDefault));
    })

    let cardDetails = JSON.parse(localStorage.getItem('cardDetails')) || cardDetailsDefault;

    if (props.card === "fav") {
        cardDetails = cardDetails.filter((card) => card.favourite === true);
        console.log(cardDetails);
    }

    if (props.card === "Oldest") {
        cardDetails.sort((a, b) => b.id - a.id);
    } else {
        cardDetails.sort((a, b) => a.id - b.id);
    }

    if (props.search) {
        console.log(props.search);
        cardDetails = cardDetails.filter((card) => card.title.toLowerCase().includes(props.search.toLowerCase()));
    }

    return (
        <div className="mt-12">
            <Grid container spacing={4}>
                {cardDetails.map((cardDetail) => (
                    <Grid item key={cardDetail.id} xs={12} sm={6} md={4}>
                        <Link to={`/card-details/${cardDetail.id}`}>
                            <Card className="h-full flex flex-col rounded-2xl">
                                <div className="flex items-center p-4">
                                    <img className="w-28 h-24 rounded-lg" src={cardDetail.image} alt={cardDetail.title} />
                                    <CardContent className="grow">
                                        <Typography varient="h4" gutterBottom>
                                            <p className='font-semibold'>{cardDetail.title}</p>
                                        </Typography>
                                    </CardContent>
                                </div>
                                <CardContent>
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
