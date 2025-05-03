import TabsComponent from "../Tabs";
import GeometricDistribution from "./Geometric";
import HypergeometricDistribution from "./Hipergeometric";

const DistribuicaoDeProbabilidadeII = () => {
	return (
		<div className="mt-12 p-6 border rounded-lg bg-white">
			<h1 className="text-lg font-semibold">
				Distribuição de Probabilidade II
			</h1>
			<TabsComponent
				defaultValue="geometrica"
				tabs={[
					{ value: "geometrica", label: "Geométrica" },
					{ value: "hipergeométrica", label: "Hipergeométrica" },
				]}
				tabsContent={[
					{
						value: "geometrica",
						content: (
							<div className="flex flex-col gap-4">
								<GeometricDistribution />
							</div>
						),
					},
					{
						value: "hipergeométrica",
						content: (
							<div className="flex flex-col gap-4">
								<HypergeometricDistribution />
							</div>
						),
					},
				]}
			/>
		</div>
	);
};

export default DistribuicaoDeProbabilidadeII;
