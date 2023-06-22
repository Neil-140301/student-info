import React, { ChangeEvent } from 'react';
import { createChatBotMessage, createClientMessage } from 'react-chatbot-kit';
import { setAge } from '../chatbot/userSlice';
import { useAppDispatch } from '../chatbot/appStore';
import { ChatState, ChatWidgetProps } from '../chatbot/actions';

function AgeSelector({ setState, actions }: ChatWidgetProps) {
	const dispatch = useAppDispatch();

	const onChange = function (event: ChangeEvent<HTMLSelectElement>) {
		const age = event.currentTarget.value;
		setState((prev: ChatState) => {
			prev.messages.pop();
			const botQuestion3 = createChatBotMessage('Enter your age', {});
			const userMessage = createClientMessage(age, {});

			return {
				...prev,
				messages: [...prev.messages, botQuestion3, userMessage],
			};
		});

		setTimeout(() => {
			dispatch(setAge(age));
			actions.handleAge();
		}, 2000);
	};

	return (
		<div className="flex items-center gap-4">
			<h4 className="text-slate-500 text-sm">Select your age:</h4>
			<select
				className="select w-40 h-8 focus:outline-none select-accent"
				onChange={onChange}
				name="age"
				defaultValue=""
			>
				<option value="" disabled>
					Age
				</option>
				{new Array(15).fill(0).map((_, idx) => (
					<option key={idx} value={idx + 18}>
						{idx + 18}
					</option>
				))}
			</select>
		</div>
	);
}

export default AgeSelector;

