import React from "react";
import Map, {Marker} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Props } from "../../types/types";

const UserGeoLocation: React.FC<Props> = ({ userLongitude, userLatitude }) => {
  console.log("UserGeoLocation props:", { userLongitude, userLatitude });
  console.log("UserGeoLocation coordinates:", {
    longitude: Number(userLongitude.toPrecision(3)),
    latitude: Number(userLatitude.toPrecision(3)),
  }); 
  return (
    <div>
      <Map
        initialViewState={{
          longitude: 76.93275456824303, // Number(userLongitude.toPrecision(3)), // -37.3, //-122.4
          latitude: 11.02878910296039, //Number(userLatitude.toPrecision(3)), // 81.1, //37.8
          zoom: 14,
        }}
        style={{ width: 600, height: 450 }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=5EOLB4Fbz0492dmM4UPS"
      >
        <Marker
          longitude={76.93275456824303}
          latitude={11.02878910296039}
          anchor="bottom"
        />
      </Map>
    </div>
  );
}

export default UserGeoLocation;