"use strict"

import React, { useState } from "react"

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
	const [location, updateLocation] = useState("Seattle, WA")
	const [animal, updateAnimal] = useState("")

	return (
		<div className="search-params">
			<form action="">
				<label htmlFor="location">
					Location
					<input
						id="location"
						value={location}
						placeholder="Location"
						onChange={e => updateLocation(e.target.value)}
					/>
				</label>
				<label htmlFor="animla">
					Animal
					<select
						name="animal"
						id="animal"
						value={animal}
						onChange={e => updateAnimal(e.target.value)}
						onBlur={e => updateAnimal(e.target.value)}
					>
						<option />
						{ANIMALS.map(animal => (
							<option value={animal} key={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default SearchParams
