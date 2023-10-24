type Route = {
  path: string;
  key: string;
  label: string;
};

export const routes: Route[] = [
  {
    path: '/',
    key: 'home',
    label: 'Home',
  },
  {
    path: '/pageone',
    key: 'pageone',
    label: 'Page One',
  },
];
