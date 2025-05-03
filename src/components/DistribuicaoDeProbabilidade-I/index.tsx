import TabsComponent from "../Tabs";
import BinomialDistribution from "./Binomial";
import MultinomialDistribution from "./Multinomial";

const DistribuicaoDeProbabilidadeI = () => {
	return (
		<div className="mt-12 p-6 border rounded-lg bg-white">
			<h1 className="text-lg font-semibold">Distribuição de Probabilidade I</h1>
			<TabsComponent
				defaultValue="binomial"
				tabs={[
					{ value: "binomial", label: "Binomial" },
					{ value: "multinomial", label: "Multinomial" },
				]}
				tabsContent={[
					{
						value: "binomial",
						content: (
							<div className="flex flex-col gap-4">
								<BinomialDistribution />
							</div>
						),
					},
					{
						value: "multinomial",
						content: (
							<div className="flex flex-col gap-4">
								<MultinomialDistribution />
							</div>
						),
					},
				]}
			/>
		</div>
	);
};

export default DistribuicaoDeProbabilidadeI;
