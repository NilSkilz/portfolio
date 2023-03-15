import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homeparticle from "../src/pages/homeParticle";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={< Homeparticle />} />

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;