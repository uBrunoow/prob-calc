import { combinations } from "@/components/DistribuicaoDeProbabilidade-I/Binomial";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function HypergeometricDistribution() {
	const [N, setN] = useState("");
	const [K, setK] = useState("");
	const [n, setn] = useState("");
	const [x, setX] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculateHypergeometric() {
		const NValue = Number.parseInt(N);
		const KValue = Number.parseInt(K);
		const nValue = Number.parseInt(n);
		const xValue = Number.parseInt(x);

		if (
			Number.isNaN(NValue) ||
			Number.isNaN(KValue) ||
			Number.isNaN(nValue) ||
			Number.isNaN(xValue) ||
			NValue <= 0 ||
			KValue < 0 ||
			nValue <= 0 ||
			xValue < 0 ||
			KValue > NValue ||
			xValue > KValue ||
			nValue > NValue
		) {
			setResult(null);
			return;
		}

		// Fórmula: P(X = x) = [C(K, x) × C(N - K, n - x)] / C(N, n)
		const numerator =
			combinations(KValue, xValue) *
			combinations(NValue - KValue, nValue - xValue);
		const denominator = combinations(NValue, nValue);
		const probability = numerator / denominator;

		setResult(probability);
	}

	return (
		<div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número total de elementos (N)
				</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={N}
					onChange={(e) => setN(e.target.value)}
					placeholder="Ex: 20"
				/>
			</div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número de sucessos no total (K)
				</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={K}
					onChange={(e) => setK(e.target.value)}
					placeholder="Ex: 7"
				/>
			</div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número de elementos selecionados (n)
				</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={n}
					onChange={(e) => setn(e.target.value)}
					placeholder="Ex: 5"
				/>
			</div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número de sucessos na seleção (x)
				</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={x}
					onChange={(e) => setX(e.target.value)}
					placeholder="Ex: 2"
				/>
			</div>
			<Button className="mt-2" onClick={calculateHypergeometric}>
				Calcular
			</Button>
			{result !== null && (
				<div className="mt-4 p-3 bg-gray-100 rounded">
					<p>
						Probabilidade Hipergeométrica (P(X = x)): <b>{result}</b>
					</p>
				</div>
			)}
		</div>
	);
}

export default HypergeometricDistribution;
