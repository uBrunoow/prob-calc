import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const WeightedAverage = () => {
	const [values, setValues] = useState("");
	const [weights, setWeights] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculateWeightedMean() {
		const vals = values
			.split(",")
			.map((n) => Number.parseFloat(n.trim()))
			.filter((n) => !Number.isNaN(n));
		const wts = weights
			.split(",")
			.map((n) => Number.parseFloat(n.trim()))
			.filter((n) => !Number.isNaN(n));
		if (vals.length === 0 || vals.length !== wts.length) {
			setResult(null);
			return;
		}
		const sumProduct = vals.reduce((acc, val, i) => acc + val * wts[i], 0);
		const sumWeights = wts.reduce((a, b) => a + b, 0);
		if (sumWeights === 0) {
			setResult(null);
			return;
		}
		setResult(sumProduct / sumWeights);
	}

	return (
		<div>
			<Label htmlFor="weighted-values">Valores</Label>
			<Input
				id="weighted-values"
				placeholder="Ex: 2, 4, 6"
				value={values}
				onChange={(e) => setValues(e.target.value)}
			/>
			<Label htmlFor="weighted-weights" className="mt-2">
				Pesos
			</Label>
			<Input
				id="weighted-weights"
				placeholder="Ex: 1, 2, 3"
				value={weights}
				onChange={(e) => setWeights(e.target.value)}
			/>
			<Button className="mt-2" onClick={calculateWeightedMean}>
				Calcular
			</Button>
			{result !== null && (
				<p className="mt-2">
					Média ponderada: <b>{result}</b>
				</p>
			)}
		</div>
	);
};

export default WeightedAverage;
