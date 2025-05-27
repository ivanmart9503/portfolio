'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Goutdo',
		description: 'Goutdo es una app que permite a los usuarios encontrar eventos y experiencias únicas a su alrededor, además de conectar con gente que comparte sus mismos intereses.',
		image: '/projects/goutdo.png',
		playStoreLink: 'https://play.google.com/store/apps/details?id=com.estudioalfa.goutdo',
		appStoreLink: 'https://apps.apple.com/es/app/goutdo-citas-y-experiencias/id6744376047',
		tags: ['Flutter', 'Supabase', 'Laravel'],
	},
	{
		title: 'Lspiedo Roast Chicken',
		description: 'App de delivery del restaurante Lspiedo Roast Chicken, que permite a los usuarios hacer pedidos y pagar por sus comidas.',
		image: '/projects/lspiedo.png',
		playStoreLink: 'https://play.google.com/store/apps/details?id=com.lspiedo.app',
		appStoreLink: 'https://apps.apple.com/us/app/lspiedo-roadst-chicken/id1635395667',
		tags: ['Flutter', 'Firebase'],
	},
	{
		title: 'Thora: Binge eating tracker',
		description: 'Thora es una app que permite al usuario comprender mejor su relación con la comida y su tendencia a comer excesivamente. Además de brindar herramientas, tips, consejos, etc. para ayudar a controlar esta tendencia.',
		image: '/projects/thora.png',
		playStoreLink: 'https://play.google.com/store/apps/details?id=com.thora.app',
		appStoreLink: 'https://apps.apple.com/us/app/thora-binge-eating-tracker/id6738961776',
		tags: ['Flutter', 'Firebase', 'Laravel', 'RevenueCat'],
	},
	{
		title: 'Consumo pesca artesanal',
		description: 'Consumo Pesca Artesanal es tu guía completa para conocer, disfrutar y valorar los pescados de temporada. Explora la riqueza del mar con información detallada sobre especies disponibles cada mes, características únicas como sabor, textura, olor, fibrosidad y firmeza.',
		image: '/projects/pesca.png',
		playStoreLink: 'https://play.google.com/store/apps/details?id=com.estudioalfa.lonjas',
		appStoreLink: 'https://apps.apple.com/us/app/consumo-pesca-artesanal/id6740923540',
		tags: ['Flutter'],
	},
	{
		title: 'ENKI: Gestor de proyectos',
		description: 'ENKI es una plataforma para el manejo de proyectos y contratos. Con ENKI podrás llevar tus documentos y proyectos contigo a donde sea y en cualquier momento, todo en un único lugar.',
		image: '/projects/enki.png',
		playStoreLink: 'https://play.google.com/store/apps/details?id=com.estudioalfa.enki',
		appStoreLink: 'https://apps.apple.com/us/app/enki-gestor-de-proyectos/id6443556783',
		tags: ['Flutter', 'Firebase', 'Laravel'],
	},
	{
		title: 'Vinow',
		description: 'Vinow es una app de delivery de vinos, que permite a los usuarios hacer pedidos y pagar por sus vinos.',
		image: '/projects/vinow.png',
		appStoreLink: 'https://apps.apple.com/mx/app/vinow/id6446805007',
		tags: ['Flutter', 'Firebase', 'Laravel'],
	},
	{
		title: 'Bitácora Digital',
		description: 'App para llevar el seguimiento a proyectos de construcción. Permite a los usuarios subir imágenes, videos, notas y documentos referentes a cada proyecto, además de actualizar la ubicación, progreso general y estado del proyecto.',
		image: '/projects/bitacora.png',
		playStoreLink: 'https://play.google.com/store/apps/details?id=com.bitacora.digital',
		appStoreLink: 'https://apps.apple.com/mx/app/bit%C3%A1cora-digital-m%C3%B3vil/id1487869449',
		tags: ['Flutter', 'Firebase', 'Laravel', 'MySQL'],
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Proyectos que he realizado
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="flex flex-col group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6 flex flex-col flex-grow">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>

								<div className="flex flex-wrap gap-2 mb-8">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
											{tag}
										</span>
									))}
								</div>

								<div className="flex flex-wrap justify-center gap-2 mt-auto">
									{project.playStoreLink && (
										<Link
											href={project.playStoreLink}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-blue-900/25 hover:bg-blue-900 rounded-full px-4 py-2 text-sm font-semibold text-white shadow transition-colors"
										>
											<Image src="/playstore.png" alt="Google Play Store" width={20} height={20} className="w-5 h-5" />
											Google Play
										</Link>
									)}
									{project.appStoreLink && (
										<Link
											href={project.appStoreLink}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-blue-900/25 hover:bg-blue-900 rounded-full px-4 py-2 text-sm font-semibold text-white shadow transition-colors"
										>
											<Image src="/appstore.png" alt="App Store" width={20} height={20} className="w-5 h-5" />
											App Store
										</Link>
									)}
								</div>

							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
