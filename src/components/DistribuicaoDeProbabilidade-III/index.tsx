import TabsComponent from "../Tabs";
import PoissonDistribution from "./Poisson";

const DistribuicaoDeProbabilidadeIII = () => {
	return (
		<div className="mt-12 p-6 border rounded-lg bg-white">
			<h1 className="text-lg font-semibold">
				Distribuição de Probabilidade III
			</h1>
			<TabsComponent
				defaultValue="poisson"
				tabs={[{ value: "poisson", label: "Poisson" }]}
				tabsContent={[
					{
						value: "poisson",
						content: (
							<div className="flex flex-col gap-4">
								<PoissonDistribution />
							</div>
						),
					},
				]}
			/>
		</div>
	);
};

export default DistribuicaoDeProbabilidadeIII;
