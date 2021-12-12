export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61b65957722d4f15435f5233',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4ay51par',
                  apiId: '55a94b2f-5d33-481e-9bed-1c6df63e533d'
                },
                {
                  buildHookId: '61b659572de32cdc51893a85',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p2quz9j2',
                  apiId: '276acda5-a929-4464-8895-6d4377e5a0d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ScottGrun/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p2quz9j2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
