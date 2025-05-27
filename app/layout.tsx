import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Iván Martínez',
	description:
		'Bienvenido a mi portfolio, aquí encontrarás información sobre mis proyectos, habilidades y contacto.',
	keywords: [
		'Flutter',
		'Firebase',
		'Supabase',
		'Flutter/Dart',
		'Laravel',
		'MySQL',
		'Web Developer',
		'UI/UX',
		'Responsive Design',
		'Mobile App Development',
		'Backend Development',
		'Iván Martínez',
	],
	authors: [{ name: 'Iván Martínez' }],
	creator: 'Iván Martínez',
	openGraph: {
		title: 'Iván Martínez',
		description: 'Bienvenido a mi portfolio, aquí encontrarás información sobre mis proyectos, habilidades y contacto.',
		url: 'https://portfolio-ivan-martinezs-projects-36bb417d.vercel.app/',
		siteName: 'Iván Martínez',
		images: [
			{
				url: '/preview.png',
				width: 1200,
				height: 630,
				alt: 'Iván Martínez',
			},
		],
		locale: 'es_MX',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Iván Martínez',
		description: 'Bienvenido a mi portfolio, aquí encontrarás información sobre mis proyectos, habilidades y contacto.',
		creator: '@ivanmart9503',
		images: ['/preview.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
