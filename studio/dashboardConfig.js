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
                  buildHookId: '5ec2062b496fb511191e1cbb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-srbhgx32',
                  apiId: '9724cd70-f8b2-442f-a26f-0a616a6e1989'
                },
                {
                  buildHookId: '5ec2062b9a085084dee50906',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pp84pjjf',
                  apiId: 'b9ebe3d2-25fa-4964-be36-6aff279d1caf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanditjia/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pp84pjjf.netlify.app', category: 'apps'}
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
