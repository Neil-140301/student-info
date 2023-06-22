import React from 'react';
import { ChatActions } from '../chatbot/actions';
import { setName } from '../chatbot/userSlice';
import { useAppDispatch } from '../chatbot/appStore';

const MessageParser = ({ children, actions }: MessageParserProps) => {
	const dispatch = useAppDispatch();

	const parse = (message: string) => {
		if (message.length > 0) {
			dispatch(setName(message));
			actions.handleName();
		}
	};

	return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					parse: parse,
					actions,
				});
			})}
		</div>
	);
};

export default MessageParser;

type MessageParserProps = {
	children: any;
	actions: ChatActions;
};
