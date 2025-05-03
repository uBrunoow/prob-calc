import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

// Função para calcular o fatorial
export function factorial(num: number): number {
	if (num === 0 || num === 1) return 1;
	return num * factorial(num - 1);
}

// Função para calcular combinações C(n, x)
export function combinations(n: number, x: number): number {
	return factorial(n) / (factorial(x) * factorial(n - x));
}

function BinomialDistribution() {
	const [n, setN] = useState("");
	const [x, setX] = useState("");
	const [p, setP] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculateBinomial() {
		const nValue = Number.parseInt(n);
		const xValue = Number.parseInt(x);
		const pValue = Number.parseFloat(p);
		const qValue = 1 - pValue;

		if (
			Number.isNaN(nValue) ||
			Number.isNaN(xValue) ||
			Number.isNaN(pValue) ||
			nValue < 0 ||
			xValue < 0 ||
			xValue > nValue ||
			pValue < 0 ||
			pValue > 1
		) {
			setResult(null);
			return;
		}

		const probability =
			combinations(nValue, xValue) *
			pValue ** xValue *
			qValue ** (nValue - xValue);
		setResult(probability);
	}

	return (
		<div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número de tentativas (n)
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
					Número de sucessos (x)
				</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={x}
					onChange={(e) => setX(e.target.value)}
					placeholder="Ex: 3"
				/>
			</div>
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
			<Button className="mt-2" onClick={calculateBinomial}>
				Calcular
			</Button>
			{result !== null && (
				<div className="mt-4 p-3 bg-gray-100 rounded">
					<p>
						Probabilidade Binomial (P(x)): <b>{result.toFixed(6)}</b>
					</p>
				</div>
			)}
		</div>
	);
}

export default BinomialDistribution;
