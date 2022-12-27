export const dummyData = [
  {
    id: 1,
    username: 'jane_doe',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    image: 'https://picsum.photos/id/237/200/300',
    likes: 100,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur dictum lacus, at dictum sem placerat eget.',
    comments: [
      {
        id: 1,
        username: 'john_doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 2,
        username: 'jane_doe',
        text: 'Suspendisse potenti. Proin nec consectetur lacus.'
      }
    ]
  },
  {
    id: 2,
    username: 'john_doe',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    image: 'https://picsum.photos/id/10/200/300',
    likes: 50,
    caption: 'Phasellus auctor elit non lorem tincidunt, vel faucibus lacus scelerisque.',
    comments: [
      {
        id: 1,
        username: 'jane_doe',
        text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'
      },
      {
        id: 2,
        username: 'john_doe',
        text: 'Donec vel nisi vel nibh sollicitudin venenatis at vel diam.'
      },
      {
        id: 3,
        username: 'jane_doe',
        text: 'Vivamus tempus nibh et eros sollicitudin, a faucibus est elementum.'
      }
    ]
  }
];
