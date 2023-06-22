'use client';

import React from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '../chatbot/config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

function MyChatBot() {
	return (
		<div className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
			<Chatbot
				config={config}
				actionProvider={ActionProvider}
				messageParser={MessageParser}
			/>
		</div>
	);
}

export default MyChatBot;
