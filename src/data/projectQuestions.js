export const projectQuestions = [
  {
    number: 0,
    block: 1,
    endpoint: 'user-project',
    title: 'What is the name of your project?',
    subtext: 'e.g. "BlockArch"',
    type: 'text',
    answers: [],
    weight: 0,
    field: 'projectName',
    entries: [],
  },
  {
    number: 1,
    block: 1,
    endpoint: 'user-project-purpose',
    title: 'What is the purpose of your blockchain network?',
    subtext: '...where it is intended to be used',
    type: 'radio',
    answers: ['Business', 'Personal', 'Government', 'Research'],
    weight: 1,
    field: 'purpose',
    entries: ['business', 'personal', 'government', 'research'],
  },
  {
    number: 2,
    block: 1,
    endpoint: 'user-project-industry',
    title: 'Which industry is your blockchain being used in?',
    type: 'radio',
    answers: ['Finance', 'Supply Chain', 'DeFi/NFTs', 'Healthcare', 'Digital Assets', 'Intellectual Property', 'Education & Research', 'Insurance'],
    weight: 3,
    field: 'industryUsage',
    entries: ['finance', 'supplyChain', 'defiNft', 'healthcare', 'digitalAssets', 'intellectualProperty', 'educationAndResearch', 'insurance'],
  },
  {
    number: 24,
    block: 1,
    endpoint: 'user-project-languages',
    title: 'What language will you be developing in?',
    type: 'radio',
    answers: ['Go', 'Python', 'Java', 'Kotlin', 'Rust', 'Scala', 'Solidity'],
    weight: 0,
    field: 'developmentLanguages',
    entries: ['go', 'python', 'java', 'kotlin', 'rust', 'scala', 'solidity'],
  },
  {
    number: 3,
    block: 2,
    endpoint: 'user-project-network-participants',
    title: 'Who are the participants within your network?',
    type: 'radio',
    answers: ['Individuals', 'Companies', 'NGOs', 'Government Bodies', 'Consortia'],
    weight: 3,
    field: 'networkParticipants',
    entries: ['individuals', 'companies', 'ngo', 'governmentBody', 'consortia'],
  },
  {
    number: 10,
    block: 2,
    endpoint: 'user-project',
    title: 'Do you want participants to access your network by invite only?',
    type: 'Boolean',
    answers: [],
    weight: 2,
    field: 'inviteOnlyAccess',
    entries: [],
  },
  {
    number: 11,
    block: 2,
    endpoint: 'user-project',
    title: 'Do you need to identify all participants of your network?',
    type: 'Boolean',
    answers: [],
    weight: 2,
    field: 'identityMandatory',
    entries: [],
  },
  {
    number: 9,
    block: 3,
    endpoint: 'user-project',
    title: 'How big is each piece of shared data in megabytes? (not considering performance)',
    type: 'radio',
    answers: ['0-1', '1 < x < 2', '2 < x < 5', '5 < x < 20', '20+', 'Not sure'],
    weight: 2,
    field: 'transactionSize',
    entries: [1, 2, 5, 20, 30, 0],
  },
  {
    number: 17,
    block: 3,
    endpoint: 'user-project',
    title: 'What type of information are you sharing on your solution?',
    subtext: 'e.g. XML, JSON, binary data etc',
    type: 'text',
    answers: [],
    weight: 0,
    field: 'informationType',
    entries: [],
  },
  {
    number: 18,
    block: 3,
    endpoint: 'user-project',
    title: 'What is your expected maximum message size?',
    subtext: '...in MBs',
    type: 'number',
    answers: [],
    weight: 0,
    field: 'maximumMessageSize',
    entries: [],
  },
  {
    number: 8,
    block: 4,
    endpoint: 'user-project',
    title: 'How many transactions per second?',
    type: 'radio',
    answers: ['1-10', '10-100', '100+'],
    weight: 3,
    field: 'transactionsPerSecond',
    entries: [10, 100, 1000],
  },
  {
    number: 7,
    block: 4,
    endpoint: 'user-project',
    title: 'What is your expected average number of transactions per month?',
    type: 'radio',
    answers: ['1-10', '10-100', '100+'],
    weight: 3,
    field: 'transactionsPerMonth',
    entries: [10, 100, 1000],
  },
  {
    number: 16,
    block: 4,
    endpoint: 'user-project',
    title: 'What are the ideal transactions per seconds?',
    subtext: 'e.g. 10, or 100',
    type: 'number',
    answers: [],
    weight: 0,
    field: 'idealTransactionsPerSecond',
    entries: [],
  },
  {
    number: 15,
    block: 5,
    endpoint: 'user-project',
    title: 'Do you need to use physical devices as part of your solution?',
    type: 'Boolean',
    answers: [],
    weight: 2,
    field: 'requirePhysicalDevices',
    entries: [],
  },
  {
    number: 20,
    block: 5,
    endpoint: 'user-project',
    title: 'Will you be using additional systems alongside your solution?',
    subtext: '...additional infrastructure',
    type: 'Boolean',
    answers: [],
    weight: 3,
    field: 'additionalSystems',
    entries: [],
  },
  {
    number: 23,
    block: 6,
    endpoint: 'user-project',
    title: 'How actively engaged will the participants in your solution be?',
    type: 'radio',
    answers: ['Seconds', 'Minutes', 'Hourly', 'Daily', 'Weekly', 'Monthly'],
    weight: 3,
    field: 'activelyEngaged',
    entries: ['seconds', 'minutes', 'hourly', 'daily', 'weekly', 'monthly'],
  },
  {
    number: 22,
    block: 6,
    endpoint: 'user-project',
    title: 'Do you want the underlying technology to be actively maintained/upgraded?',
    type: 'Boolean',
    answers: [],
    weight: 2,
    field: 'activelyMaintained',
    entries: [],
  },
  // Change to binary numbers`
  {
    number: 6,
    block: 6,
    endpoint: 'user-project',
    title: 'How much is your investment budget for building your solution?',
    type: 'radio',
    answers: ['$0-100', '$100-1000', '$1000+'],
    weight: 2,
    field: 'budgetAmount',
    entries: [100, 1000, 10000],
  },
  {
    number: 4,
    block: 6,
    endpoint: 'user-project',
    title: 'Are you building yourself, or would you outsource to build this?',
    type: 'radio',
    answers: ['In-House', 'Out-Sourced', 'Both'],
    weight: 1,
    field: 'outsourcedBuild',
    entries: ['inHouse', 'outSourced', 'both'],
  },
  // {
  //   number: 19,
  //   block: 6,
  //   endpoint: 'user-project',
  //   title: 'GCR Rating?',
  //   type: 'Boolean',
  //   answers: [],
  //   weight: 0,
  //   field: 'grc',
  //   entries: [],
  // },
  {
    number: 14,
    block: 7,
    endpoint: 'user-project',
    title: 'Does your solution need to meet local/international legal requirements?',
    type: 'Boolean',
    answers: [],
    weight: 1,
    field: 'meetLegalRequirements',
    entries: [],
  },
  {
    number: 13,
    block: 7,
    endpoint: 'user-project',
    title: 'Do you need your solution to operate within a regulated environment/market?',
    type: 'Boolean',
    answers: [],
    weight: 3,
    field: 'operateInRegulatoryEnvironment',
    entries: [],
  },
  {
    number: 21,
    block: 7,
    endpoint: 'user-project',
    title: 'Is the ESG() impact an important factor in your solution choice?',
    type: 'radio',
    answers: ['Important', 'Potentially Important', 'Not Important'],
    weight: 1,
    field: 'esgRelevant',
    entries: ['important', 'potentiallyImportant', 'notImportant'],
  },
  {
    number: null,
    block: 8,
    endpoint: null,
    title: 'Submit your project',
    subtext: 'Ensure all questions are correct and click submit',
    type: null,
    answers: null,
    weight: null,
    field: 'finish',
    entries: null,
  },
];
