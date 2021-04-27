import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container, Paper } from '@material-ui/core';
import ExpCardComponent from './ExpCardComponent';


// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//         margin: "8px 10%",
//     },
//     title: {
//         fontSize: 20,
//     },
//     content: {
//         padding: "3% 7% 0",
//     },
//     card: {
//         margin: "3% 0"
//     }
// });





export default function ExperiencePage(props) {
    //const classes = useStyles();
    const resumeData = props.resumeData


    console.log("Exp resumeData");
    console.log(resumeData);

    return (
        
        <Container>
            <div>
                

                <Grid container spacing={1} direction="row"  alignItems="center">
                    {resumeData.map((data, i) =>
                        <div key={i}>
                            <Grid item >
                            <ExpCardComponent data={data} />
                            </Grid>
                        </div>

                    )}
                </Grid>

            </div>
        </Container>
        
    )
}