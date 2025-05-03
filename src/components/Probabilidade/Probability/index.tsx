import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function Probability() {
	const [favorableCases, setFavorableCases] = useState("");
	const [totalCases, setTotalCases] = useState("");
	const [probabilityA, setProbabilityA] = useState<number | null>(null);

	// Calcular a probabilidade de A
	function calculateProbabilityA() {
		const favorable = Number.parseFloat(favorableCases);
		const total = Number.parseFloat(totalCases);

		if (Number.isNaN(favorable) || Number.isNaN(total) || total === 0) {
			setProbabilityA(null);
			return;
		}

		const result = favorable / total;
		setProbabilityA(result);
	}

	return (
		<div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número de casos favoráveis
				</Label>
				<Input
					type="number"
					step="1"
					className="border rounded px-2 py-1 w-full"
					value={favorableCases}
					onChange={(e) => setFavorableCases(e.target.value)}
					placeholder="Ex: 3"
				/>
			</div>

			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Número total de casos possíveis
				</Label>
				<Input
					type="number"
					step="1"
					className="border rounded px-2 py-1 w-full"
					value={totalCases}
					onChange={(e) => setTotalCases(e.target.value)}
					placeholder="Ex: 10"
				/>
			</div>

			<div className="flex gap-4">
				<Button className="mt-2" onClick={calculateProbabilityA}>
					Calcular
				</Button>
			</div>

			{probabilityA !== null && (
				<div className="mt-4 p-3 bg-gray-100 rounded">
					<p>
						Probabilidade de A (P(A)): <b>{probabilityA.toFixed(4)}</b>
					</p>
				</div>
			)}
		</div>
	);
}

export default Probability;
