import React from 'react';
import getActions from '../chatbot/actions';

const ActionProvider = ({ setState, children }: ActionProviderProps) => {
	const actions = getActions(setState);
	return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					actions,
				});
			})}
		</div>
	);
};

export default ActionProvider;

type ActionProviderProps = {
	setState: Function;
	children: any;
};
