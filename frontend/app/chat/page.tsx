import MyChatBot from '../components/MyChatBot';

export default function Chat() {
	return (
		<div className="h-screen bg-slate-100">
			<div className="h-16 py-4 px-10 shadow bg-blue-100">
				<h1 className="text-xl font-medium text-blue-300">
					Student Info System
				</h1>
			</div>
			<MyChatBot />
		</div>
	);
}
