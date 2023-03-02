import React, { Fragment, useState, useEffect } from "react";
import { Grid, Card, Typography, Divider, Button, Fab, IconButton, Stack } from '@mui/material'
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent,
    TimelineDot, TimelineOppositeContent, timelineOppositeContentClasses} from '@mui/lab'
import { Link } from "react-router-dom";

const TimelinePage = (props) => {

    const {setOpenHistory, selectedSiteHistory, setOpen}= props

    const dummyData = [
        {
            datetimestamp: "February 13, 2023 9:30 AM", 
            title: "Raised to Alert 1",
            trigger: "Rainfall"
        },
        {
            datetimestamp: "February 3, 2023 7:30 PM", 
            title: "Lowered to Alert 0",
            trigger: "Rainfall"
        },
        {
            datetimestamp: "January 31, 2023 7:30 PM", 
            title: "Raised to Alert 1",
            trigger: "Rainfall"
        },
        {
            datetimestamp: "December 10, 2022 7:30 PM", 
            title: "Lowered to Alert 0",
            trigger: "Rainfall, Surficial Movement"
        },
        {
            datetimestamp: "December 3, 2022 7:30 PM", 
            title: "Raised to Alert 2",
            trigger: "Rainfall, Surficial Movement"
        },
    ]

    const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta erat nec leo tempus porttitor. Suspendisse varius aliquam neque nec ultrices. Aenean in est sodales leo consectetur condimentum. Ut porta laoreet tortor non cursus. Suspendisse aliquam fermentum fringilla. Sed sapien neque, commodo quis mollis interdum, ultricies non turpis. Quisque volutpat nulla velit, eu mollis orci elementum ut. Quisque in justo ac dolor malesuada tempus."



    return(
        <Grid container>
            <Grid item xs={12} md={12} lg={12} sx={{margin: 5}}>
                <Link
                    component="button" 
                    style={{fontStyle: 'italic', fontSize: 16}}
                    onClick={() => {
                        setOpenHistory(false)
                        setTimeout(() => {
                            setOpen(true);
                          }, 500)
                    }}>
                        Close
                </Link>
            </Grid>
            <Grid item xs={12} md={12} lg={12} sx={{margin: 5}}>
                <Typography variant="h4" textAlign='center'>{selectedSiteHistory} Event History</Typography>
            </Grid>
            <Timeline sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
                },
            }}>
                {dummyData.map(element => (
                    // console.log(element)
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                            {element.datetimestamp}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="warning"/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card sx={{width: '80%', padding: 2, border: '1px solid black'}}>
                                <Typography variant='h5' sx={{backgroundColor: '#16526D'}} color='white'>&nbsp;{element.title}</Typography>
                                <Divider />
                                <Typography variant="body"><b>Trigger:</b>{element.trigger}</Typography>
                                <Typography variant="body2" textAlign='justify'>{lorem_ipsum}</Typography>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Grid>
    )
}

export default TimelinePage