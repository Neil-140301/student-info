import React from 'react';

function Card({ children }: CardProps) {
	return (
		<div className="bg-white text-center space-y-6 p-8 shadow rounded-lg">
			{children}
		</div>
	);
}

export default Card;

type CardProps = {
	children: React.ReactNode;
};
