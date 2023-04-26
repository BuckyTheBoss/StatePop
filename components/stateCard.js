import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function StateCard({ stateData }) {
  return (
    <Card sx={{ minWidth: 275, m: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          data year: {stateData['ID Year']}
        </Typography>
        <Typography variant="h5" component="div">
           {stateData.State}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Population: {stateData.Population}
        </Typography>
      
      </CardContent>
      
    </Card>
  );
}