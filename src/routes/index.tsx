import DistribuicaoDeProbabilidadeI from "@/components/DistribuicaoDeProbabilidade-I";
import DistribuicaoDeProbabilidadeII from "@/components/DistribuicaoDeProbabilidade-II";
import DistribuicaoDeProbabilidadeIII from "@/components/DistribuicaoDeProbabilidade-III";
import MedidasDeCentralidade1 from "@/components/MedidasDeCentralidade-I";
import MedidasDeCentralidade2 from "@/components/MedidasDeCentralidade-II";
import MedidasDeDispersao from "@/components/MedidasDeDispersao";
import MedidasDePosicao from "@/components/MedidasDePosicao";
import Probabilidade from "@/components/Probabilidade";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="flex min-h-screen flex-col bg-gradient-to-br from-transparent to-zinc-300 text-black">
			<main className="flex-1">
				<section id="calculator" className="w-full py-12 md:py-24">
					<div className="container px-4 md:px-6 mx-auto flex flex-col items-start text-left space-y-8">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
							Calculadora de Probabilidade e Estatística
						</h1>
					</div>
					<div className="container px-4 md:px-6 mx-auto">
						<MedidasDeCentralidade1 />
						<MedidasDeCentralidade2 />
						<MedidasDeDispersao />
						<MedidasDePosicao />
						<Probabilidade />
						<DistribuicaoDeProbabilidadeI />
						<DistribuicaoDeProbabilidadeII />
						<DistribuicaoDeProbabilidadeIII />
					</div>
				</section>
			</main>
			<footer className="w-full border-t border-white/10 py-6 md:py-8">
				<div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="text-center md:text-left">
						<p className="text-sm text-gray-400">
							© 2025 StatCalc. Todos os direitos reservados.
						</p>
					</div>
					<div className="flex gap-4">
						<Link to={"/"} className="text-sm text-gray-400 hover:text-white">
							Termos
						</Link>
						<Link to={"/"} className="text-sm text-gray-400 hover:text-white">
							Privacidade
						</Link>
						<Link to={"/"} className="text-sm text-gray-400 hover:text-white">
							Contato
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
