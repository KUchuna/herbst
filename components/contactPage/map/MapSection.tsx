"use client"

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';

export default function MapSection() {
    const position: [number, number] = [41.6938, 44.8015];


    return (
        <section className="flex w-full justify-center px-20 pb-16 items-start font-lora">
            <div className="max-w-large-width w-full flex flex-col justify-center items-center">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-[50vh] w-full rounded-[32px] z-10">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}></Marker>
                </MapContainer>
            </div>
        </section>
    );
}
