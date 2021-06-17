"use strict"

import React, { FunctionComponent } from "react"

interface PetProps {
	name: string
	animal: string
	breed: string
}

const Pet: FunctionComponent<PetProps> = ({ name, animal, breed }) => (
	<div>
		<h1>{name}</h1>
		<h2>{animal}</h2>
		<h2>{breed}</h2>
	</div>
)

export default Pet
