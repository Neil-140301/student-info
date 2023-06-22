import { createChatBotMessage, createClientMessage } from 'react-chatbot-kit';
import { ChatState, ChatWidgetProps } from '../chatbot/actions';

function BubbleButton({ setState, actions }: ChatWidgetProps) {
	const onClick = function () {
		setState((prev: ChatState) => {
			prev.messages.pop();
			const botMessage = createChatBotMessage(
				'Hello, Welcome to student info system.',
				{}
			);
			const userMessage = createClientMessage('Got it.', {});

			return {
				...prev,
				messages: [...prev.messages, botMessage, userMessage],
			};
		});

		setTimeout(() => {
			actions.handleHello();
		}, 1500);
	};

	return (
		<div className="">
			<span
				className="badge cursor-pointer badge-outline badge-accent"
				onClick={onClick}
			>
				Got it!
			</span>
		</div>
	);
}

export default BubbleButton;
