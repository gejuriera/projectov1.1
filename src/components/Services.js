import React, { Component } from "react";
import { FaParking,FaTableTennis } from "react-icons/fa";
import { GiParkBench ,GiCow, GiHorseHead,GiSoccerKick,GiTabletopPlayers,GiBathtub} from "react-icons/gi";
import { RiBilliardsFill,RiRestTimeLine} from "react-icons/ri";
import { MdPool } from "react-icons/md";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaParking />,
        title: "Parqueadero interno",
        
      },
      {
        icon: <FaTableTennis/>,
        title: "Mesa ping-pong",
        
      },
      {
        icon: <RiRestTimeLine/>,
        title: "Área de hamacas",
        
      },
      {
        icon: <GiBathtub/>,
        title: "Jacuzzi",
        
      },
      {
        icon: <GiTabletopPlayers/>,
        title: "Mesa futbolín",
        
      },
      {
        icon: <GiCow/>,
        title: "Animales de granja",
        
      },
      {
        icon: <GiParkBench/>,
        title: "Parque infantil",
        
      },
      {
        icon: <RiBilliardsFill/>,
        title: "Mesa de billar",
        
      },
      {
        icon: <GiSoccerKick/>,
        title: "Canchas de futbol",
        
      },
      {
        icon: <MdPool />,
        title: "Piscinas",
        
      },
      
      {
        icon: <GiHorseHead />,
        title: "Paseo a caballo",
        
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="servicios" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
