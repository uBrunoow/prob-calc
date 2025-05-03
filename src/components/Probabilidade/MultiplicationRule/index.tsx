import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function MultiplicationRule() {
	const [probA, setProbA] = useState("");
	const [probB, setProbB] = useState("");
	const [probIntersection, setProbIntersection] = useState("");
	const [multiplicationResult, setMultiplicationResult] = useState<
		number | null
	>(null);

	// Calcular probabilidade com a regra da multiplicação
	function calculateMultiplicationRule() {
		const pA = Number.parseFloat(probA);
		const pB = Number.parseFloat(probB);

		if (Number.isNaN(pA) || Number.isNaN(pB)) {
			setMultiplicationResult(null);
			return;
		}

		const result = pA * pB;
		setMultiplicationResult(result);
	}

	return (
		<div>
			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Probabilidade de A (P(A))
				</Label>
				<Input
					type="number"
					step="0.01"
					className="border rounded px-2 py-1 w-full"
					value={probA}
					onChange={(e) => setProbA(e.target.value)}
					placeholder="Ex: 0.5"
				/>
			</div>

			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Probabilidade de B (P(B))
				</Label>
				<Input
					type="number"
					step="0.01"
					className="border rounded px-2 py-1 w-full"
					value={probB}
					onChange={(e) => setProbB(e.target.value)}
					placeholder="Ex: 0.3"
				/>
			</div>

			<div className="mb-3">
				<Label className="block text-sm font-medium mb-1">
					Probabilidade de A e B (P(A e B))
				</Label>
				<Input
					type="number"
					step="0.01"
					className="border rounded px-2 py-1 w-full"
					value={probIntersection}
					onChange={(e) => setProbIntersection(e.target.value)}
					placeholder="Ex: 0.1"
				/>
			</div>

			<div className="flex gap-4">
				<Button className="mt-2" onClick={calculateMultiplicationRule}>
					Calcular
				</Button>
			</div>

			{multiplicationResult !== null && (
				<div className="mt-4 p-3 bg-gray-100 rounded">
					<p>
						Probabilidade (Regra da Multiplicação):{" "}
						<b>{multiplicationResult.toFixed(4)}</b>
					</p>
				</div>
			)}
		</div>
	);
}

export default MultiplicationRule;
