export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6040b05c94ea84ba3a4d43ea',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nturu5yh',
                  apiId: 'fe107160-3ae8-40a3-9084-0b500f6e3a09'
                },
                {
                  buildHookId: '6040b05c631f74a2d414f2ef',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iysex587',
                  apiId: '9f371463-173c-49d0-a77e-bcddf9a8a3b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MaksymTaratuta55/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iysex587.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
