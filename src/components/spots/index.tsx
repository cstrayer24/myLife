"use client";
import baseData from "@/types/userBaseData";
import "mapbox-gl/dist/mapbox-gl.css";
import * as mb from "mapbox-gl";
import MainLayout from "../Layout/mainLayout";
import { useEffect, useState } from "react";
import getCurrentLatLng from "@/lib/getCurrentLatLng";
const ZOOMAMT = 10;
export default function SpotsComponent({
  data,
  pubAccessToken,
}: {
  data: baseData;
  pubAccessToken: string;
}) {
  //   const [currentLocation, setCurrentLocation] = useState<number[]>([]);

  //   mb.accessToken.replace(mb.accessToken, process.env.MAPBOXPUBTOKEN as string);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const map = new mb.Map({
          style: "mapbox://styles/mapbox/streets-v11",
          container: "map",
          accessToken: pubAccessToken,
          center: [pos.coords.longitude, pos.coords.latitude],
          zoom: ZOOMAMT,
        });

        map.on("load", (ev) => {
          map.addSource("MainSrc", {
            type: "vector",
            url: "mapbox://mapbox.mapbox-streets-v8",
          });
          map.addLayer({
            id: "main-layer",
            type: "fill",
            source: "MainSrc",
          });
        });
      });
    } else {
      alert("browser not support");
    }
  }, [pubAccessToken]);

  return (
    <MainLayout data={data}>
      <div className=" w-full h-full">
        <div id="map" className=" w-full h-full"></div>
      </div>
    </MainLayout>
  );
}
