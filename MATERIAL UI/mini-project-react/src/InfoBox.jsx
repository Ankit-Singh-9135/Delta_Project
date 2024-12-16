import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1601141922947-9fc7f16bee8e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let COld_URL = "https://images.unsplash.com/photo-1633458942455-a52fabc1b5fc?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://media.istockphoto.com/id/1093871206/photo/elephants-on-the-banks-of-kabini-river-nagarhole-karnataka-india.jpg?s=2048x2048&w=is&k=20&c=kasxY24ONejzgWI2Rt1yfyDN_JXoxkF-rJVCvWpZhnY=";
    let RAIN_URL = "https://images.unsplash.com/photo-1694451352527-1e7464481643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            {/* <h1>Weather Info-{info.weather}</h1> */}
            <div className='card_container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? < WbSunnyIcon /> : COld_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? HOT_URL : <AcUnitIcon />}

                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature={info.temp}&deg;C</p>
                            <p>Humidity={info.humidity}</p>
                            <p>Min Temp={info.tempMin}</p>
                            <p>Max Temp={info.tempMax}</p>
                            <p>The weather can be describe as<i>{info.weather}</i>  and feels like{info.feelslike}&deg;C</p>

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}