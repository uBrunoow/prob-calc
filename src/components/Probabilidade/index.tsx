import TabsComponent from "../Tabs";
import AdditionRule from "./AdditionRule";
import ProbabilityIntersection from "./Intersection";
import MultiplicationRule from "./MultiplicationRule";
import Probability from "./Probability";

const Probabilidade = () => {
	return (
		<div className="mt-12 p-6 border rounded-lg bg-white">
			<h1 className="text-lg font-semibold">Probabilidade</h1>
			<TabsComponent
				defaultValue="probabilidade"
				tabs={[
					{ value: "probabilidade", label: "Probabilidade de um Evento" },
					{ value: "intersecao", label: "Intersecção" },
					{ value: "regra-adicao", label: "Regra da Adição" },
					{ value: "regra-multiplicacao", label: "Regra da Multiplicação" },
				]}
				tabsContent={[
					{
						value: "probabilidade",
						content: (
							<div className="flex flex-col gap-4">
								<Probability />
							</div>
						),
					},
					{
						value: "intersecao",
						content: (
							<div className="flex flex-col gap-4">
								<ProbabilityIntersection />
							</div>
						),
					},
					{
						value: "regra-adicao",
						content: (
							<div className="flex flex-col gap-4">
								<AdditionRule />
							</div>
						),
					},
					{
						value: "regra-multiplicacao",
						content: (
							<div className="flex flex-col gap-4">
								<MultiplicationRule />
							</div>
						),
					},
				]}
			/>
		</div>
	);
};

export default Probabilidade;
