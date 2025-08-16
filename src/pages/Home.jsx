import Card from "../components/Card.jsx";
import { useEffect } from "react";
import { useState } from "react";

export const Home = () => {


  const [personas, setPersonas] = useState([])
  const [planetas, setPlanetas] = useState([])

	useEffect(()=>{
		fetch('https://www.swapi.tech/api/people/')
		.then((response)=> response.json() )
		.then((data)=> setPersonas(data.results) )
	},[])

	useEffect(()=>{
		fetch('https://www.swapi.tech/api/planets/')
		.then((response)=> response.json() )
		.then((data)=> setPlanetas(data.results) )
	},[])
	
	return (
		<div className="container text-center mt-5">
				<h1>PERSONAJES!!</h1>
				<div className="row flex-nowrap overflow-x-auto py-3">
					{personas.map((persona, index) => <Card key={index} llaveid={persona.uid} name={persona.name} type="people" />)}
				</div>
				<h1>PLANETAS!!</h1>
				<div className="row flex-nowrap overflow-x-auto py-3">
					{planetas.map((planeta,index) => <Card key={index} llaveid={planeta.uid} name={planeta.name} type="planets" />)}
				</div>
		</div>
	);
}; 