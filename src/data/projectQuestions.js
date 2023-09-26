export const projectQuestions = [
    {
        number: 0,
        block: 0,
        endpoint: 'user-project',
        title: 'What is the name of your project?',
        type: 'text',
        answers: [],
        weight: 0,
        field: 'project_name'
    },
    {
        number: 1,
        block: 1,
        endpoint: 'dlt-solution-purpose',
        title: 'What is the purpose of your blockchain network?',
        type: 'radio',
        answers: ['Business', 'Personal', 'Government', 'Research'],
        weight: 1,
        field: 'answer'
    },
    {
        number: 2,
        block: 1,
        endpoint: 'user-project-industry',
        title: 'What industry is your blockchain being used in?',
        type: 'radio',
        answers: ['Finance', 'Supply Chain', 'DeFi/NFTs', 'Healthcare', 'Digital Assets', 'Intellectual Property', 'Education & Research', 'Insurance'],
        weight: 3,
        field: 'answer'
    },
    {
        number: 3,
        block: 2,
        endpoint: 'user-project-network-participants',
        title: 'Who are the participants within your network?',
        type: 'radio',
        answers: ['Individuals', 'Companies', 'NGOs', 'Government Bodies', 'Consortia'],
        weight: 3,
        field: 'answer'
    },
    {
        number: 4,
        block: 6,
        endpoint: 'user-project',
        title: 'Are you building yourself, or would you outsource to build this?',
        type: 'radio',
        answers: ['In-House', 'Out-Sourced', 'Both'],
        weight: 1,
        field: 'outsourced-build'
    },
    {
        number: 5,
        block: 6,
        endpoint: 'user-project',
        title: 'How generalist or specialist is your dev team?',
        type: 'radio',
        answers: ['Generalist', 'Specialist'],
        weight: 1,
        field: 'generalist_specialist'
    },
    {
        number: 6,
        block: 6,
        endpoint: 'user-project',
        title: 'How much is your investment budget for building your solution?',
        type: 'radio',
        answers: ['Small', 'Medium', 'Large'],
        weight: 2,
        field: 'budget_amount'
    },
    {
        number: 7,
        block: 4,
        endpoint: 'user-project',
        title: 'What is your expected average number of transactions per month?',
        type: 'radio',
        answers: ['Small 1-10', 'Medium 10-100', 'Large 100+'],
        weight: 3,
        field: 'transactions_per_month'
    },
    {
        number: 8,
        block: 4,
        endpoint: 'user-project',
        title: 'How many transactions per second?',
        type: 'radio',
        answers: ['Small 1-10', 'Medium 10-100', 'Large 100+'],
        weight: 3,
        field: 'transactions_per_second'
    },
    {
        number: 9,
        block: 3,
        endpoint: 'user-project',
        title: 'How big is each piece of shared data? (not considering performance)',
        type: 'radio',
        answers: ['0-1MB', '1 < x < 2MB', '2 < x < 5MB', '5 < x < 20 MB', '20+ MB', 'Not sure'],
        weight: 2,
        field: 'transaction_size'
    },
    {
        number: 10,
        block: 2,
        endpoint: 'user-project',
        title: 'Do you want participants to access your network by invite only?',
        type: 'Boolean',
        answers: [],
        weight: 2,
        field: 'invite_only_access'
    },
    {
        number: 11,
        block: 2,
        endpoint: 'user-project',
        title: 'Do you need to identify all participants of your network?',
        type: 'Boolean',
        answers: [],
        weight: 2,
        field: 'identity_mandatory'
    },
    {
        number: 12,
        block: 2,
        endpoint: 'user-project',
        title: 'As the solution controller, do you need to be able to see all the participants?',
        type: 'Boolean',
        answers: [],
        weight: 3,
        field: 'solution_controller_participant_view'
    },
    {
        number: 13,
        block: 7,
        endpoint: 'user-project',
        title: 'Do you need your solution to operate within a regulated environment/market?',
        type: 'Boolean',
        answers: [],
        weight: 3,
        field: 'operate_in_regulatory_environment'
    },
    {
        number: 14,
        block: 7,
        endpoint: 'user-project',
        title: 'Does your solution need to meet local/international legal requirements?',
        type: 'Boolean',
        answers: [],
        weight: 1,
        field: 'meet_legal_requirements'
    },
    {
        number: 15,
        block: 5,
        endpoint: 'user-project',
        title: 'Do you need to use physical devices as part of your solution?',
        type: 'Boolean',
        answers: [],
        weight: 2,
        field: 'require_physical_devices'
    },
    {
        number: 16,
        block: 4,
        endpoint: 'user-project',
        title: 'What are the ideal transactions per seconds?',
        type: 'text',
        answers: [],
        weight: 0,
        field: 'ideal_transactions_per_second'
    },
    {
        number: 17,
        block: 3,
        endpoint: 'user-project',
        title: 'What information are you sharing on your solution?',
        type: 'text',
        answers: [],
        weight: 0,
        field: 'information_type'
    },
    {
        number: 18,
        block: 3,
        endpoint: 'user-project',
        title: 'What is your expected maximum message size?',
        type: 'text',
        answers: [],
        weight: 0,
        field: 'maximum_message_size,'
    },
    {
        number: 19,
        block: 6,
        endpoint: 'user-project',
        title: 'GCR Rating?',
        type: 'Boolean',
        answers: [],
        weight: 0,
        field: 'grc'
    },
    {
        number: 20,
        block: 5,
        endpoint: 'user-project',
        title: 'Will you be using additional systems alongside your solution? (infrastructure does this new question discriminate)',
        type: 'Boolean',
        answers: [],
        weight: 3,
        field: 'additional_systems'
    },
    {
        number: 21,
        block: 7,
        endpoint: 'user-project',
        title: 'Is the ESG impact an important factor in your solution choice?',
        type: 'radio',
        answers: ['Important', 'Potentially Important', 'Not Important'],
        weight: 1,
        field: 'esg_relevant'
    },
    {
        number: 22,
        block: 6,
        endpoint: 'user-project',
        title: 'Do you want the underlying technology to be actively maintained/upgraded?',
        type: 'Boolean',
        answers: [],
        weight: 2,
        field: 'actively_maintained'
    },
    {
        number: 23,
        block: 4,
        endpoint: 'user-project',
        title: 'How actively engaged will the participants in your solution be?',
        type: 'radio',
        answers: ['Seconds', 'Minutes', 'Hourly', 'Daily', 'Weekly', 'Monthly'],
        weight: 3,
        field: 'actively_engaged'
    },
    {
        number: 24,
        block: 1,
        endpoint: 'user-project-languages',
        title: 'What language will you be developing in?',
        type: 'radio',
        answers: ['Go', 'Python', 'Java', 'Kotlin', 'Rust', 'Scala', 'Solidity'],
        weight: 0,
        field: 'answer'
    }
]