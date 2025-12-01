import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

type MapProps={
  position: string;
  destination: string;
}

const destinationIcon= L.icon({
  iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize:[35,35], 
  iconAnchor:[17,35],
  popupAnchor:[0,-35],
})

export function MapAPI({position, destination}: MapProps){
  const [positionCoordinates, setPositionCoordinates]=useState<[number, number] | null>(null);
  const [destinationCoordinates, setDestinationCoordinates]= useState<[number, number]| null>(null);

  const fetcher= async (city: string)=>{
    const res= await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
    const data= await res.json();
    if (data&& data.length> 0){
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)] as [number, number];
    }
    return null;
  }
  useEffect(()=>{
    fetcher(position).then((coords)=> coords && setPositionCoordinates(coords));
    fetcher(destination).then((coords)=> coords&& setDestinationCoordinates(coords))
  }, [position, destination]);

  return(
      <MapContainer
      center={[36.8065, 10.1815]}
      zoom={7}
      style={{ height: "1000px", width: "1500px" }}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positionCoordinates &&(
          <Marker position={positionCoordinates}>
            <Popup>Position: {position}</Popup>
          </Marker>
        )}
        {destinationCoordinates && (
        <Marker position={destinationCoordinates} icon={destinationIcon}>
          <Popup>Destination: {destination}</Popup>
        </Marker>
      )}
      </MapContainer>
  );
}