import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { factorial } from "../Binomial";

function MultinomialDistribution() {
	const [n, setN] = useState("");
	const [xValues, setXValues] = useState("");
	const [pValues, setPValues] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculateMultinomial() {
		const nValue = Number.parseInt(n);
		const xArray = xValues.split(",").map((x) => Number.parseInt(x.trim()));
		const pArray = pValues.split(",").map((p) => Number.parseFloat(p.trim()));

		if (
			Number.isNaN(nValue) ||
			xArray.some((x) => Number.isNaN(x)) ||
			pArray.some((p) => Number.isNaN(p) || p < 0 || p > 1) ||
			xArray.reduce((a, b) => a + b, 0) !== nValue ||
			Math.abs(pArray.reduce((a, b) => a + b, 0) - 1) > 0.0001 // Verifica se a soma é aproximadamente 1
		) {
			alert(
				"Entradas inválidas! Certifique-se de que a soma de xValues seja igual a n e a soma de pValues seja igual a 1.",
			);
			setResult(null);
			return;
		}

		const numerator = factorial(nValue);
		const denominator = xArray.reduce((acc, x) => acc * factorial(x), 1);
		const probabilities = xArray.reduce((acc, x, i) => acc * pArray[i] ** x, 1);

		const probability = (numerator / denominator) * probabilities;
		setResult(probability);
	}

	console.log("n", n);
	console.log("xValues", xValues);
	console.log("pValues", pValues);
	console.log("result", result);

	return (
		<div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número total de tentativas (n)
				</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={n}
					onChange={(e) => setN(e.target.value)}
					placeholder="Ex: 10"
				/>
			</div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Números de sucessos (x₁, x₂, ..., xₖ) separados por vírgula
				</Label>
				<Input
					type="text"
					className="border rounded px-2 py-1 w-full"
					value={xValues}
					onChange={(e) => setXValues(e.target.value)}
					placeholder="Ex: 3, 4, 3"
				/>
			</div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Probabilidades (P₁, P₂, ..., Pₖ) separadas por vírgula
				</Label>
				<Input
					type="text"
					className="border rounded px-2 py-1 w-full"
					value={pValues}
					onChange={(e) => setPValues(e.target.value)}
					placeholder="Ex: 0.3, 0.4, 0.3"
				/>
			</div>
			<Button className="mt-2" onClick={calculateMultinomial}>
				Calcular
			</Button>
			{result !== null && (
				<div className="mt-4 p-3 bg-gray-100 rounded">
					<p>
						Probabilidade Multinomial: <b>{result.toFixed(6)}</b>
					</p>
				</div>
			)}
		</div>
	);
}

export default MultinomialDistribution;
