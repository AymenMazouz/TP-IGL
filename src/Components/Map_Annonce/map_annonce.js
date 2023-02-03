/*********lyes */
import { useState } from "react";
import "./style.css";
import img from "../../Images/img.png";
import { Link as LinkR } from "react-router-dom";

import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import axios from "axios";

const Map_Annonce = (prop) => {
  const announces = prop.announces;

//   const res = await axios.get("");
//   console.log(res.data);


  return (
    <dir className="ContainerMap_Annonce">
      <div className="map">
        <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: 3.05176,
            latitude: 36.77172,
            zoom: 4,
          }}
          style={{ width: "100%", height: " calc(95vh - 77px)" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=ami5YZbLyI4lKlA0CpRx	"
        >
          <NavigationControl position="top-left" />
          {announces.map((announce) => (
            <Marker
              longitude={announce.longitude}
              latitude={announce.latitude}
            ></Marker>
            
          ))}
        </Map>
      </div>
      <div className="Containerannonce">
        {announces.map((announce) => (
          <LinkR
            className="annonce"
            key={announce.id}
            to={`/Signin/SigninUser/Main/lyes/detaiAI/${announce.id}`}
          >
            <div className="divimg">
              <img
                className="imgai"
                src={announce.images[0]}
                // src=""************************************************************************************************************
                alt="AI IMAGE"
                width="100%"
                style={{maxHeight: "300px",minHeight:"300px"}}
                
              />
            </div>

            
            <p className="prix">{announce.prix} DA</p>
            <p className="adr">{announce.adresse}</p>
            <div className="TypeSurface">
              <p className="typeai">{announce.type}</p>
              <p className="surface">{announce.surface} m²</p>
            </div>
          </LinkR>
        ))}
      </div>
      {/* {console.log(announce.photos[0])} */}
      {/* {% for user in users.items %}
    < h1> {{ user.name }} </h1>
      {% endfor %}

<nav aria-label="Page navigation example">
                <ul class="pagination">
                    {% if users.has_prev %}
                      <li class="page-item"> <a class="page-link" href="{{ url_for('index', page=users.prev_num) }}">Previous</a></li>
                    {% else %}
                      <li class="page-item"><a class="page-link btn disabled" href="#">Previous</a></li>
                    {% endif %}


                    {% if users.has_next %}
                      <li class="page-item"> <a class="page-link" href="{{ url_for('index', page=users.next_num) }}">Next</a></li>
                    {% else %}
                      <li class="page-item"><a class="page-link btn disabled" href="#">Next</a></li>
                    {% endif %}

                </ul>
              </nav> */}
    </dir>
  );
};

export default Map_Annonce;
