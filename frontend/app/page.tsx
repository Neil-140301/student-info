import Link from 'next/link';
import Card from './components/Card';

export default function Home() {
	return (
		<div className="bg-sky-50 h-screen flex flex-col items-center justify-center">
			<Card>
				<h1 className="text-xl font-semibold text-slate-600">
					Student Info System
				</h1>
				<p className="text-sm text-slate-400 font-medium max-w-xs text-justify">
					Welcome to Student Info System. Please click on the button below to
					enroll yourself and get your student ID. You can then access all
					student benefits.
				</p>
				<div className="">
					<Link className="btn btn-wide btn-primary" href={'/chat'}>
						<span>Enroll Now</span>
						<span>{'->'}</span>
					</Link>
				</div>
			</Card>
		</div>
	);
}
