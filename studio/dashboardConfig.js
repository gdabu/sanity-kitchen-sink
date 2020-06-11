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
                  buildHookId: '5ee1b33bd3f54b2a02b92caf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5r1z1dmj',
                  apiId: '3b04aed7-718a-4106-897a-c1221fb6010a'
                },
                {
                  buildHookId: '5ee1b33b1845d3f5ac696fa0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-md7pbwec',
                  apiId: '29de51a3-3df5-4d7e-bab0-b965accd59ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gdabu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-md7pbwec.netlify.app', category: 'apps'}
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
