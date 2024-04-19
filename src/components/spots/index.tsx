"use client";
import baseData from "@/types/userBaseData";
import "mapbox-gl/dist/mapbox-gl.css";
import * as mb from "mapbox-gl";
import MainLayout from "../Layout/mainLayout";
import { useEffect, useState } from "react";
import getCurrentLatLng from "@/lib/getCurrentLatLng";
import SpotComponent from "./SpotComponent";
const ZOOMAMT = 10;
export default function SpotsComponent({
  data,
  pubAccessToken,
}: {
  data: baseData;
  pubAccessToken: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
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
          setIsLoading(false);
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
      <div className=" w-full h-full relative">
        {isLoading && <h1 className=" text-ml-onyx">Loading...</h1>}
        {!isLoading && (
          <div className=" z-10 w-10 h-10 absolute top-0 left-0 overflow-scroll">
            <SpotComponent name="test" address="test" link="test" image="" />
          </div>
        )}
        {/* <div id="map" className="h-full z-0"></div> */}
      </div>
    </MainLayout>
  );
}
