module.exports = {
  stages: [
    {
      name: 'Personal information',
      text: 'We would like to give you the best product. This survey will take few seconds.',
      questions: [
        {
          name: 'name',
          text: 'My name is {input}',
          rules: { type: 'text', pattern: '[A-Za-z]{3,255}' }
        },
        {
          name: 'email',
          text: 'I\'m using {input} email.',
          rules: { type: 'email' }
        },
        {
          name: 'phone',
          text: 'And my phone number is {input}',
          rules: { type: 'text', pattern: '[0-9]{10,11}' }
        }
      ]
    },
    {
      name: 'Address',
      text: 'We need your address to confirm our best offer',
      questions: [
        {
          name: 'country',
          text: 'I live in {input}',
          rules: { type: 'country' }
        },
        {
          name: 'zip',
          text: 'My zip code is {input}',
          rules: { type: 'text', pattern: '[0-9]{3,9}' }
        }
      ]
    },
    {
      name: 'General Information',
      text: 'These answers provides deeper insights to craft something special',
      questions: [
        {
          name: 'income',
          text: 'My family makes {input} per year.',
          rules: { type: 'number', min: 1 }
        },
        {
          name: 'family_members',
          text: 'There is {input} person in my tax household.',
          rules: { type: 'select', range: { from: 1, to: 10, step: 1 } }
        }
      ]
    }
  ]
};
