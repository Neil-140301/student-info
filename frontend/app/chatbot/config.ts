import { createChatBotMessage } from 'react-chatbot-kit';
import Config from 'react-chatbot-kit/src/interfaces/IConfig';
import BubbleButton from '../components/Bubble';
import AgeSelector from '../components/Age';
import Timer from '../components/Redirect';
import {
	CustomBotAvatar,
	CustomHeader,
	CustomUserAvatar,
} from '../components/CustomBot';



const botName = 'Sam';

const config: Config = {
	initialMessages: [
		createChatBotMessage(`Welcome to student info system! I'm ${botName}`, {
			widget: 'bubble',
			loading: true,
			delay: 500,
		}),
	],
	botName,
	customComponents: {
		header: CustomHeader,
		botAvatar: CustomBotAvatar,
		userAvatar: CustomUserAvatar,
	},
	widgets: [
		{
			widgetName: 'bubble',
			widgetFunc: BubbleButton,
			props: [],
			mapStateToProps: [],
		},
		{
			widgetName: 'age',
			widgetFunc: AgeSelector,
			props: [],
			mapStateToProps: [],
		},
		{
			widgetName: 'timer',
			widgetFunc: Timer,
			mapStateToProps: [],
			props: [],
		},
	],
};

export default config;
