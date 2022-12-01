/**Variable values
tutors-> name -> appointments -> status: booked/ available /pending //maybe true or false
tutors-> name -> appointments -> student: name of student who booked appointment

time: new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/



//let sampleDate = new Date(2020, 5, 9, 10, 0)
let today = new Date();
let sampleMonth = today.getMonth(); //get current Month
//notice offset: 3 corresponds to April
let sampleDay = today.getDate(); // get current day of the Month

// console.log(sampleMonth, sampleDay);

let tutors = [
	{
		name: 'Jenna Doe',
		employeeId: 0,
		appointments: [
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 10, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
					location: 'BH 3129',
					description: 'Jenna Doe has a major in English Language and Literature. She is here to assist and provide practical tips you can apply to your papers',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 2, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 2, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay + 1, 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay + 1, 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay + 1 , 3, 20),
					endTime: new Date(2020, sampleMonth, sampleDay + 1, 3, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay + 1, 4, 20),
					endTime: new Date(2020, sampleMonth, sampleDay + 1, 4, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
        },
        {
					startTime: new Date(2020, sampleMonth, sampleDay+6, 10, 0),
					endTime: new Date(2020, sampleMonth, sampleDay+6, 10, 20),
					location: 'BH 3129',
					description: 'Jenna Doe has a major in English Language and Literature. She is here to assist and provide practical tips you can apply to your papers',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+6, 10, 20),
					endTime: new Date(2020, sampleMonth, sampleDay+6, 10, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+6, 10, 40),
					endTime: new Date(2020, sampleMonth, sampleDay+6, 11, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+6, 2, 0),
					endTime: new Date(2020, sampleMonth, sampleDay+6, 2, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+6, 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay+6, 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+6, 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay+6, 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay + 7, 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay + 7, 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay + 7 , 3, 20),
					endTime: new Date(2020, sampleMonth, sampleDay + 7, 3, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay + 7, 4, 20),
					endTime: new Date(2020, sampleMonth, sampleDay + 7, 4, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
		],
	},

	{
		name: 'John Smith',
		employeeId: 1,
		appointments: [
			{
				startTime: new Date(2020, sampleMonth, sampleDay, 10, 0),
				endTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
				location: 'BH 3129',
				description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
				status: 'available',
				student: '', //insert entire student object here if possible
			},
			{
				startTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
				endTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
				location: 'BH 3129',
				description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
				status: 'available',
				student: '', //insert entire student object here if possible
			},
			{
				startTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
				endTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
				location: 'BH 3129',
				description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
				status: 'available',
				student: '', //insert entire student object here if possible
			},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 11, 20),
					location: 'BH 3129',
					description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12, 40),
					location: 'BH 3129',
					description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 1, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 12+ 1, 20),
					location: 'BH 3129',
					description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 1, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 2, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 10, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
					location: 'BH 3129',
					description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 10, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
					location: 'BH 3129',
					description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 10, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
					location: 'BH 3129',
					description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
					{
						startTime: new Date(2020, sampleMonth, sampleDay, 11, 0),
						endTime: new Date(2020, sampleMonth, sampleDay, 11, 20),
						location: 'BH 3129',
						description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
					{
						startTime: new Date(2020, sampleMonth, sampleDay+1, 12, 20),
						endTime: new Date(2020, sampleMonth, sampleDay+1, 12, 40),
						location: 'BH 3129',
						description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
					{
						startTime: new Date(2020, sampleMonth, sampleDay, 12 + 1, 0),
						endTime: new Date(2020, sampleMonth, sampleDay, 12+ 1, 20),
						location: 'BH 3129',
						description: 'John Smith specializes in Creative Writing and would love to be of assistance.',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
					{
						startTime: new Date(2020, sampleMonth, sampleDay+1, 12 + 1, 40),
						endTime: new Date(2020, sampleMonth, sampleDay+1, 12 + 2, 0),
						location: 'BH 3129',
						description: '',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
					{
						startTime: new Date(2020, sampleMonth, sampleDay+1, 12 + 2, 20),
						endTime: new Date(2020, sampleMonth, sampleDay+1, 12 + 2, 40),
						location: 'BH 3129',
						description: '',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
		],
	},


	{
		name: 'Shikamaru Nara',
		employeeId: 2,
		appointments: [
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 20),
					location: 'BH 3129',
					description: 'Shikamaru Nara is an expert in drafting academic articles. He can provide  some guidance on the papers you have been putting off.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 4, 40),
					location: 'BH 3129',
					description: 'Shikamaru Nara is an expert in drafting academic articles. He can provide  some guidance on the papers you have been putting off.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 0),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 20),
					location: 'BH 3129',
					description: 'Shikamaru Nara is an expert in drafting academic articles. He can provide  some guidance on the papers you have been putting off.',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 20),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay, 12 + 5, 40),
					endTime: new Date(2020, sampleMonth, sampleDay, 12 + 6, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
        },
        {
        startTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 4, 0),
        endTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 4, 20),
        location: 'BH 3129',
        description: 'Shikamaru Nara is an expert in drafting academic articles. He can provide  some guidance on the papers you have been putting off.',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 4, 20),
        endTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 4, 40),
        location: 'BH 3129',
        description: 'Shikamaru Nara is an expert in drafting academic articles. He can provide  some guidance on the papers you have been putting off.',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 5, 0),
        endTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 5, 20),
        location: 'BH 3129',
        description: 'Shikamaru Nara is an expert in drafting academic articles. He can provide  some guidance on the papers you have been putting off.',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 5, 20),
        endTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 5, 40),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 5, 40),
        endTime: new Date(2020, sampleMonth, sampleDay+2, 12 + 6, 0),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      }
		]
  },

	{
		name: 'Hermoine Granger',
		employeeId: 3,
		appointments: [
				{
					startTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 4, 0),
					endTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 4, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 4, 20),
					endTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 4, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 5, 0),
					endTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 5, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 5, 20),
					endTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 5, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 5, 40),
					endTime: new Date(2020, sampleMonth, sampleDay+3, 12 + 6, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
        },
        {
        startTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 4, 0),
        endTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 4, 20),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 4, 20),
        endTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 4, 40),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 5, 0),
        endTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 5, 20),
        location: 'BH 2129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 5, 20),
        endTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 5, 40),
        location: 'BH 2129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 5, 40),
        endTime: new Date(2020, sampleMonth, sampleDay+4, 12 + 6, 0),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+7, 11, 0),
        endTime: new Date(2020, sampleMonth, sampleDay+7, 11, 20),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+8, 12, 20),
        endTime: new Date(2020, sampleMonth, sampleDay+8, 12, 40),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 1, 0),
        endTime: new Date(2020, sampleMonth, sampleDay+8, 12+ 1, 20),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 1, 40),
        endTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 2, 0),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      },
      {
        startTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 2, 20),
        endTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 2, 40),
        location: 'BH 3129',
        description: '',
        status: 'available',
        student: '', //insert entire student object here if possible
      }
		]
  },

  {
		name: 'Mo Jones',
		employeeId: 4,
		appointments: [
			{
				startTime: new Date(2020, sampleMonth, sampleDay+5, 10, 0),
				endTime: new Date(2020, sampleMonth, sampleDay+5, 10, 20),
				location: 'BH 3129',
				description: '',
				status: 'available',
				student: '', //insert entire student object here if possible
			},
			{
				startTime: new Date(2020, sampleMonth, sampleDay+5, 10, 20),
				endTime: new Date(2020, sampleMonth, sampleDay+5, 10, 40),
				location: 'BH 3129',
				description: '',
				status: 'available',
				student: '', //insert entire student object here if possible
			},
			{
				startTime: new Date(2020, sampleMonth, sampleDay+5, 10, 40),
				endTime: new Date(2020, sampleMonth, sampleDay+5, 11, 0),
				location: 'BH 3129',
				description: '',
				status: 'available',
				student: '', //insert entire student object here if possible
			},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+5, 11, 0),
					endTime: new Date(2020, sampleMonth, sampleDay+5, 11, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+5, 12, 20),
					endTime: new Date(2020, sampleMonth, sampleDay+5, 12, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+5, 12 + 1, 0),
					endTime: new Date(2020, sampleMonth, sampleDay+5, 12+ 1, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+5, 12 + 1, 40),
					endTime: new Date(2020, sampleMonth, sampleDay+5, 12 + 2, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+5, 12 + 2, 20),
					endTime: new Date(2020, sampleMonth, sampleDay+5, 12 + 2, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+7, 10, 0),
					endTime: new Date(2020, sampleMonth, sampleDay+7, 10, 20),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+7, 10, 20),
					endTime: new Date(2020, sampleMonth, sampleDay+7, 10, 40),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
				{
					startTime: new Date(2020, sampleMonth, sampleDay+7, 10, 40),
					endTime: new Date(2020, sampleMonth, sampleDay+7, 11, 0),
					location: 'BH 3129',
					description: '',
					status: 'available',
					student: '', //insert entire student object here if possible
				},
					{
						startTime: new Date(2020, sampleMonth, sampleDay+7, 11, 0),
						endTime: new Date(2020, sampleMonth, sampleDay+7, 11, 20),
						location: 'BH 3129',
						description: '',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
					{
						startTime: new Date(2020, sampleMonth, sampleDay+8, 12, 20),
						endTime: new Date(2020, sampleMonth, sampleDay+8, 12, 40),
						location: 'BH 3129',
						description: '',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
					{
						startTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 1, 0),
						endTime: new Date(2020, sampleMonth, sampleDay+8, 12+ 1, 20),
						location: 'BH 3129',
						description: '',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
					{
						startTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 1, 40),
						endTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 2, 0),
						location: 'BH 3129',
						description: '',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
					{
						startTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 2, 20),
						endTime: new Date(2020, sampleMonth, sampleDay+8, 12 + 2, 40),
						location: 'BH 3129',
						description: '',
						status: 'available',
						student: '', //insert entire student object here if possible
					},
		],
	},

]

