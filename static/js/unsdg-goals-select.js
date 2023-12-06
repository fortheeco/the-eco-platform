// import Goals from './unsdg-goals.js'

// From neon, i used objects inside the array here so i can easily extract the goal number yeah????
const Goals = {
	community: [
		{num:1,name: 'no poverty'},
		{num:2,name: 'no hunger'},
		{num:3, name: 'good health'},
		{num:4, name: 'quality education'},
		{num:11, name: 'sustainable city & communities'},
		{num:16, name: 'peace & justice'},
	],
	environment: [
		{num:6, name: 'clean water and sanitation'},
		{num:7, name: 'renewable energy'},
		{num:13, name: 'climate action'},
		{num:14, name: 'life below water'},
		{num:15, name: 'life on land'},
	],
	organization: [
		{num:5, name: 'gender equality'},
		{num:8, name: 'good jobs and economic growth'},
		{num:9, name: 'innovation and infrastructure'},
		{num:10, name: 'reduce inequalities'},
		{num:12, name: 'responsible consumption'},
		{num:17, name: 'partnership for goals'},
	],
}

function setSelectOptions(activeCategory) {
	const selectOptionsArray = Goals[activeCategory]
	let selectOptions = ``
	selectOptionsArray.forEach((element) => {
		selectOptions += createSelectOption(element.num, element.name)
	})

	return selectOptions
}

function createSelectOption(value, text) {
	return `<option value='${value}'>Goal ${value} : ${text}</option>`
}

export default setSelectOptions
