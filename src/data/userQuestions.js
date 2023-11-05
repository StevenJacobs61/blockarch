export const userQuestions = [
    {
        title: 'Email and Password',
        input: [
            {
                title: 'email address',
                field: 'emailAddress',
                type: 'email'
            },
            {
                title: 'password',
                field: 'password',
                type: 'text'
            },
            {
                title: 'Confirm Password',
                field: 'password',
                type: 'text'
            }
        ]
    },
    {
        title: 'What is your name?',
        input: [
            {
                title: 'first name',
                field: 'firstName',
                type: 'text'
            },
            {
                title: 'last name',
                field: 'lastName',
                type: 'text'
            }
        ]
    },
    {
        title: 'What is your phone number?',
        input: [
            {
                title: 'phone number',
                field: 'phoneNumber',
                type: 'number'
            },
        ]
    },
    {
        title: 'What is your account type?',
        subtext: 'Personal, Professional, Corporate etc',
        input: [
            {
                title: 'account type',
                field: 'accountType',
                type: 'text'
            },
        ]
    },
    {
        title: 'What is your job role?',
        // subtext: '...Developer, CEO, CTO, Tech Lead etc',
        input: [
            {
                title: 'job role',
                field: 'jobRole',
                type: 'text'
            }
        ]
    },
    {
        title: 'What is your company name?',
        input: [
            {
                title: 'company name',
                field: 'companyName',
                type: 'text'
            }
        ]
    },
    {
        title: 'How many people work at your company?',
        input: [
            {
                title: 'company size',
                field: 'companySize',
                type: 'number'
            }
        ]
    }
]
