'use client';

import { useAppSelector } from '@/app/chatbot/appStore';
import Card from '@/app/components/Card';
import Link from 'next/link';
import React from 'react';

export default function UserInfo() {
	const user = useAppSelector((state) => state.user);

	return (
		<div className="bg-sky-50 h-screen flex flex-col justify-center items-center">
			<Card>
				<h1 className="font-semibold text-xl italic text-slate-700">
					Thank You!
				</h1>
				<h2 className="text-sm max-w-sm text-justify">
					Your name:{' '}
					<span className="text-xl underline text-slate-500">{user.name}</span>{' '}
					and age:{' '}
					<span className="text-xl underline text-slate-500">{user.age}</span>{' '}
					has been added to student system.{' '}
				</h2>
				<div className="">
					<Link className="btn btn-sm btn-success" href={'/'}>
						Home {'->'}
					</Link>
				</div>
			</Card>
		</div>
	);
}
