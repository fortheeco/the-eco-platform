export default function Overview({ innovation }) {
	const data = [
		{ name: 'target users', value: innovation?.target_user || 'not specified' },
		{ name: 'launch date', value: innovation?.launch_date || 'unknown' },
		{
			name: 'SDG addressed',
			value: innovation?.sdg_goals_targeted?.join(', ') || 'not specified',
		},
	]

	return (
		<article className="w-full flex flex-col sm:flex-row gap-3 bg-[#FBFBFB] border-4 border-nav/5 p-6 md:p-8 rounded-md mb-10">
			{data.map((item) => (
				<div key={item.name} className="flex items-baseline gap-2 capitalize">
					<h6 className="text-lg font-bold whitespace-nowrap">{item.name}: </h6>
					<p className="text-base">{item.value}</p>
				</div>
			))}
		</article>
	)
}
