import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ScoreZ = () => {
	const [value, setValue] = useState("");
	const [mean, setMean] = useState("");
	const [stdDev, setStdDev] = useState("");
	const [result, setResult] = useState<number | null>(null);

	function calculateZScore() {
		const x = Number.parseFloat(value);
		const μ = Number.parseFloat(mean);
		const σ = Number.parseFloat(stdDev);

		if (Number.isNaN(x) || Number.isNaN(μ) || Number.isNaN(σ) || σ === 0) {
			setResult(null);
			return;
		}

		// Fórmula do Escore Z: Z = (X - μ) / σ
		const zScore = (x - μ) / σ;
		setResult(zScore);
	}

	return (
		<div>
			<div className="mb-4">
				<p className="text-sm text-gray-600 mb-2">
					O Escore Z indica quantos desvios padrão um valor está distante da
					média. Formula: Z = (X - μ) / σ, onde X é o valor, μ é a média e σ é o
					desvio padrão.
				</p>
			</div>

			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">Valor (X)</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="Ex: 75"
				/>
			</div>

			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">Média (μ)</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={mean}
					onChange={(e) => setMean(e.target.value)}
					placeholder="Ex: 70"
				/>
			</div>

			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Desvio Padrão (σ)
				</Label>
				<Input
					type="number"
					className="border rounded px-2 py-1 w-full"
					value={stdDev}
					onChange={(e) => setStdDev(e.target.value)}
					placeholder="Ex: 5"
				/>
			</div>

			<Button className="mt-2" onClick={calculateZScore}>
				Calcular
			</Button>

			{result !== null && (
				<div className="mt-4 p-3 bg-gray-100 rounded">
					<p>
						Escore Z = <b>{result}</b>
					</p>
					<p className="text-sm text-gray-600 mt-1">
						{result > 0
							? `O valor está ${result} desvios padrão acima da média.`
							: result < 0
								? `O valor está ${Math.abs(result)} desvios padrão abaixo da média.`
								: "O valor é igual à média."}
					</p>
				</div>
			)}
		</div>
	);
};

export default ScoreZ;
