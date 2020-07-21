export const parent = [
  {name: 'settings', key: 'settings', children: []}
]

export const children = [
  {
    name: 'About',
    key: 'about',
    path: '/about',
    parent: 'settings'
  },
  {
    name: 'Home',
    key: 'home',
    path: '/home',
    parent: 'settings'
  }
]
