import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PeoplePlanet = props => {

  const [pplplt, setPplplt] = useState({})

  const { type, ppId } = useParams()

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${ppId}`)
      .then((response) => response.json()
      .then((data) => setPplplt(data.result.properties))
      )
  }, [type, ppId])

  return (
    <div className="container text-center">
      <div className="d-flex my-3">
        <img src={type === "people" ? `https://i.pravatar.cc/300?img=${ppId}` : `https://picsum.photos/id/1${ppId}/300/300`} alt="" />
        <div className="mx-5">
          <h1>{pplplt.name}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae obcaecati eligendi dolore aperiam neque repellat laboriosam harum. Eos cumque dignissimos earum magni nam, inventore nobis dolores maiores possimus saepe.
            Adipisci, debitis eveniet iste dolorem hic accusamus facilis autem, soluta officiis porro beatae animi? Eum est deserunt modi voluptatem sed. Optio voluptate odit aspernatur porro dignissimos tenetur ipsum rem in!
            Similique amet autem quidem hic eaque magni modi fuga, deserunt at esse nobis consequatur commodi culpa cumque veniam molestiae sunt cupiditate harum ullam! Aspernatur nam numquam, odit tempore totam error!
            Maxime laboriosam iste soluta maiores fugiat, doloribus hic quia aliquid. Quod atque harum nisi excepturi laboriosam, enim rem ipsa laudantium id blanditiis, maiores deserunt temporibus, quam nulla eius. Velit, odio?</p>
        </div>
      </div>
      <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger"></div>
      <div className="d-flex justify-content-evenly">
        <div className="text-center text-danger">
          <label>Nombre</label>
          <p>{type === "people" ? pplplt.name : pplplt.name}</p>
        </div>
        <div className="text-center text-danger">
          <label>{type === "people" ? "Birth Year": "Terreno" }</label>
          <p>{type === "people" ? pplplt.birth_year : pplplt.terrain }</p>
        </div>
        <div className="text-center text-danger">
          <label>{type === "people" ? "Gender" : "Gravedad" }</label>
          <p>{type === "people" ? pplplt.gender : pplplt.gravity }</p>
        </div>
        <div className="text-center text-danger">
          <label>{type === "people" ? "Alto" : "Clima" }</label>
          <p>{type === "people" ? pplplt.height : pplplt.climate }</p>
        </div>
        <div className="text-center text-danger">
          <label>{type === "people" ? "Skin Color" : "Periodo de Orbita"}</label>
          <p>{type === "people" ? pplplt.skin_color : pplplt.orbital_period}</p>
        </div>
        <div className="text-center text-danger">
          <label>{type === "people" ? "Eye Color" : "Diametro"}</label>
          <p>{type === "people" ? pplplt.eye_color : pplplt.diameter}</p>
        </div>
      </div>
    </div>
  );
};