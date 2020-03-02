/* Begin Exercise 2 */
var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.students[1].computer.type)
console.log(course.preReqs);
console.log(course.preReqs.equipment.OSOptions[1]);
console.log(course.preReqs.equipment.OSOptions.join(" or "));

//An array of all the students in the above object that are using OSX
for (i = 0; i < course.students.length; i++)
{
	if (course.students[i].computer.OS === 'OSX')
	{
		console.log(course.students[i].name);
	}
}



/* End Exercise 2 */