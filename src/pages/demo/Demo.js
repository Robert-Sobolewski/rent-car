import React from 'react';
import { Container } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { add, minus, selectCounter } from '../../components/counter/counterSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { selectData } from '../../redux/dataSlice';


const Demo = () => {
    const data = useSelector(selectData);

    const renderCard = (item)=>(
      <Card className="m-3" key={item.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.img}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.model}
        </Typography>
      </CardContent>
      <CardActions>
      <Stack direction="row" spacing={2}>
        <p>Price/hour: <strong>{item.ph}</strong></p>
        <p>Price/day: <strong>{item.pd}</strong></p>
        <p>Price/month: <strong>{item.pl}</strong></p>
      </Stack>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
  return <div className="demo">
      <Container className="d-flex flex-wrap align-content-space-around justify-content-space-around"> 
        {
          data?.map(item =>
            renderCard(item)
          )
        }
      </Container>
  </div>;
};

export default Demo;
