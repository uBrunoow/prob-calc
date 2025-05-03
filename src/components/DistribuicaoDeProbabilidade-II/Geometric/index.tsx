import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function GeometricDistribution() {
	const [p, setP] = useState("");
	const [x, setX] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculateGeometric() {
		const pValue = Number.parseFloat(p);
		const xValue = Number.parseInt(x);

		if (
			Number.isNaN(pValue) ||
			Number.isNaN(xValue) ||
			pValue <= 0 ||
			pValue > 1 ||
			xValue <= 0
		) {
			setResult(null);
			return;
		}

		// Fórmula: P(X = x) = (1 - P)^(x - 1) × P
		const probability = (1 - pValue) ** (xValue - 1) * pValue;
		setResult(probability);
	}

	return (
		<div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Probabilidade de sucesso (P)
				</Label>
				<Input
					type="number"
					step="0.01"
					className="border rounded px-2 py-1 w-full"
					value={p}
					onChange={(e) => setP(e.target.value)}
					placeholder="Ex: 0.5"
				/>
			</div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número da tentativa (x)
				</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={x}
					onChange={(e) => setX(e.target.value)}
					placeholder="Ex: 3"
				/>
			</div>
			<Button className="mt-2" onClick={calculateGeometric}>
				Calcular
			</Button>
			{result !== null && (
				<div className="mt-4 p-3 bg-gray-100 rounded">
					<p>
						Probabilidade Geométrica (P(X = x)): <b>{result.toFixed(6)}</b>
					</p>
				</div>
			)}
		</div>
	);
}

export default GeometricDistribution;
