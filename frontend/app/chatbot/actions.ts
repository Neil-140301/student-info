import { createChatBotMessage } from 'react-chatbot-kit';

export default function getActions(setState: Function) {
	return {
		handleHello: () => {
			const botQuestion2 = createChatBotMessage('Enter your name', {});

			setState((prev: ChatState) => {
				return {
					...prev,
					messages: [...prev.messages, botQuestion2],
				};
			});
		},
		handleName: () => {
			const botQuestion3 = createChatBotMessage('Enter your age', {
				loading: true,
				widget: 'age',
				delay: 1000,
			});

			setState((prev: ChatState) => {
				return {
					...prev,
					messages: [...prev.messages, botQuestion3],
				};
			});
		},
		handleAge: () => {
			const botEndMessage = createChatBotMessage(
				'Thank you. In 5 seconds, bot will exit',
				{}
			);

			setState((prev: ChatState) => {
				return {
					...prev,
					messages: [...prev.messages, botEndMessage],
				};
			});

			setTimeout(() => {
				const empty = createChatBotMessage('', {
					widget: 'timer',
				});

				setState((prev: ChatState) => {
					return {
						...prev,
						messages: [...prev.messages, empty],
					};
				});
			}, 5000);
		},
	};
}

export type ChatActions = ReturnType<typeof getActions>;
export type ChatState = { messages: Record<string, any>[] };
export type ChatWidgetProps = {
	setState: Function;
	actions: ChatActions;
};
