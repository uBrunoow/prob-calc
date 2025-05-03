import { factorial } from "@/components/DistribuicaoDeProbabilidade-I/Binomial";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function PoissonDistribution() {
	const [lambda, setLambda] = useState("");
	const [x, setX] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculatePoisson() {
		const lambdaValue = Number.parseFloat(lambda);
		const xValue = Number.parseInt(x);

		if (
			Number.isNaN(lambdaValue) ||
			Number.isNaN(xValue) ||
			lambdaValue <= 0 ||
			xValue < 0
		) {
			setResult(null);
			return;
		}

		// Fórmula: P(X = x) = (λ^x × e^(-λ)) / x!
		const probability =
			(lambdaValue ** xValue * Math.exp(-lambdaValue)) / factorial(xValue);
		setResult(probability);
	}

	return (
		<div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Média de ocorrências (λ)
				</Label>
				<Input
					type="number"
					step="0.01"
					className="border rounded px-2 py-1 w-full"
					value={lambda}
					onChange={(e) => setLambda(e.target.value)}
					placeholder="Ex: 4.5"
				/>
			</div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número de ocorrências (x)
				</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={x}
					onChange={(e) => setX(e.target.value)}
					placeholder="Ex: 3"
				/>
			</div>
			<Button className="mt-2" onClick={calculatePoisson}>
				Calcular
			</Button>
			{result !== null && (
				<div className="mt-4 p-3 bg-gray-100 rounded">
					<p>
						Probabilidade de Poisson (P(X = x)): <b>{result.toFixed(6)}</b>
					</p>
				</div>
			)}
		</div>
	);
}

export default PoissonDistribution;
