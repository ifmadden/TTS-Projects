/*  
Question: When to use an array of objects and object of arrays
Googled answer: If a collection of properties of varying types, use an object, otherwise use an array
test
*/

var appData = {

	name: 'Gmail',

	mailBoxes: [
		{
			inboxCategories: ['Primary', 'Social', 'Promotions']
		},
		{
			mailLabels: ['Inbox', 'Starred', 'Snoozed', 'Important', 'Sent', 'Draft', 'Categories', 'Spam']
		}
	],

	contacts: [
		{
			name: "Allie",
			lastMessage: "I'm running late",
			date: 12312019,
		},
		{
			name: "Capital One",
			lastMessage: "Your payment is due.",
			date: 2282020
		},
		{
			name: "Ben",
			lastMessage: "Check out this meme!",
			date: 1052018
		},
		{
			name: "Rent Company",
			lastMessage: "Your rent is past due.",
			date: 2292020
		}
	],

	lastThreeEmails: [
		{
			sender: "Bleecker Street",
			title: "Auto-payment Confirmation",
			summary: "Dear Ian, you've paid us more money",
			priorityFlag: false,
			timeSent: 1804
		},
		{
			sender: "Amazon",
			title: "Your Amazon.com Order #23902",
			summary: "Amazon Order Confirmation Hello Ian Madden",
			priorityFlag: false,
			timeSent: 0100
		},
		{
			sender: "Katy Satoransky",
			title: "NEW - Managerial Job Opportunities!!",
			summary: "Hi Ian, Due to the efficient synergies created in the continuosuly growing field of cyber security...",
			priorityFlag: true,
			timeSent: 1059
		}
	],

	miscEmails: [
		{
			title: "Salary Negotiation",
			summary: "Please give me more money",
			mailLabelCategory: "Inbox",
			sentStatus: false
		},

		{
			title: "Hi Mom",
			summary: "Happy birthday",
			mailLabelCateogry: "Snoozed",
			sentStatus: false
		}

	]

	
};

//----------------------------BEGIN OBTAINING LIST OF INBOX NAMES----------------------------
//Cycles through the mailboxes first level (array of objects) 
for(var i=0; i < appData.mailBoxes.length; i++) 
{
	//This obtains the second level string array from the mailbox first level
	var mailBoxPathway = appData.mailBoxes[i][Object.getOwnPropertyNames(appData.mailBoxes[i])]; 
	
	//Cycles through the mailboxes second level (array of strings)
	for(var j=0; j < mailBoxPathway.length; j++) 
	{
		if (i === 0)
		{
			console.log("This is Inbox Category #" + (j+1) + ": " + mailBoxPathway[j]);
		}

		else
		{
			console.log("This is Mail Label #" + (j+1) + ": " + mailBoxPathway[j]);
		}
		
	}
}

//----------------------------BEGIN LIST OF EMAILS----------------------------
for (var i=0; i < appData.lastThreeEmails.length; i++)
{
	console.log("Here is email summary #" + (i+1) + ": " + appData.lastThreeEmails[i].summary);
}

//----------------------------BEGIN TEXT FROM SECOND EMAIL----------------------------
console.log("Here is the text from the second email: " + appData.lastThreeEmails[1].summary);

//----------------------------BEGIN MARKING EMAIL AS SENT----------------------------
appData.miscEmails[0].sentStatus = true;
console.log("True or false, the most recent miscellaenous email has been sent: " + appData.miscEmails[0].sentStatus);

//----------------------------BEGIN ADDING DRAFT EMAIL THE DRAFT MAILBOX----------------------------
appData.miscEmails[0].mailLabelCategory = 'Draft';
console.log("The status of the most recent miscellaneous email is: " + appData.miscEmails[0].mailLabelCategory);



