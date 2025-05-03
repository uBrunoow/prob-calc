import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function ProbabilityIntersection() {
	const [probA, setProbA] = useState("");
	const [probB, setProbB] = useState("");
	const [intersectionResult, setIntersectionResult] = useState<number | null>(
		null,
	);

	// Calcular P(A ∩ B)
	function calculateIntersection() {
		const pA = Number.parseFloat(probA);
		const pB = Number.parseFloat(probB);

		if (Number.isNaN(pA) || Number.isNaN(pB)) {
			setIntersectionResult(null);
			return;
		}

		// Fórmula: P(A ∩ B) = P(A) × P(B)
		const result = pA * pB;
		setIntersectionResult(result);
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

			<div className="flex gap-4">
				<Button className="mt-2" onClick={calculateIntersection}>
					Calcular
				</Button>
			</div>

			{intersectionResult !== null && (
				<div className="mt-4 p-3 bg-gray-100 rounded">
					<p>
						Probabilidade de A e B (P(A ∩ B)):{" "}
						<b>{intersectionResult.toFixed(4)}</b>
					</p>
				</div>
			)}
		</div>
	);
}

export default ProbabilityIntersection;
