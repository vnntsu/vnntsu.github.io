export const profile = {
  fullName: 'Su Nguyen T.',
  title: 'Technical Lead',
  institute: 'Nimblehq',
  author_name: 'Su T.', // Author name to be highlighted in the papers section
  research_areas: [
    {
      title: 'Software Engineering',
      description: 'Brief description of the research interest',
      field: 'software engineering',
    },
  ],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: 'vnnts@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vnntsu',
  x: 'https://www.x.com/vnntsu',
  github: 'https://github.com/vnntsu',
  gitlab: '',
  scholar: '',
  inspire: '',
  arxiv: '',
};

export const template = {
  website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
  darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
  excerptLength: 200,
  postPerPage: 5,
  base: '', // Repository name starting with /
};

export const seo = {
  default_title: '{profile.fullName} Web',
  default_description: '{profile.fullName} Web is personal website.',
  default_image: '/images/sut-web.png',
};
