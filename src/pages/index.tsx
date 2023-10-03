const Index = () => {
	return (
		<div>
			<div id="demo" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#demo" data-bs-slide-to="0"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="2" className="active"></button>
				</div>

				<div className="carousel-inner rounded-xl my-10">
					<div className="carousel-item active">
						<img src="R.png" alt="Budapesti Nemzetközi Repülőtér" className="d-block w-full" />
					</div>
					<div className="carousel-item">
						<img src="profszerk.jpg" alt="A készítők" className="d-block w-full" />
					</div>
					<div className="carousel-item">
						<img src="repterlevegobol.jpg" alt="Budapesi Repülőtér a Levegőből" className="d-block w-full" />
					</div>
				</div>

				<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
					<span className="carousel-control-prev-icon"></span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
					<span className="carousel-control-next-icon"></span>
				</button>
			</div>

			<div className="container my-5">
				<h1 className="text-center mb-4 text-4xl">Tisztelt Látogató!</h1>
				<div className="row">
					<div className="col-sm">
						<p className="font-bold text-2xl">Készítőkről:</p>
						<p className="text-justify">
							Az oldalt Deák "Projekt Manager"Máté és társa Lőrik alias a legjobb programozó Levente készítette! Jelenleg 13.as végzős
							technikusi osztályban tanulunk és ez a projekt a vizsgaremek HTML része!
						</p>
					</div>
					<div className="col-sm">
						<p className="font-bold text-2xl">Az oldalról:</p>
						<p>Az oldalon élőben tudja követni a Budapestről induló / érkező járatokat, és adatokat tud megtudni róla az adatbázisunkból!</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index
