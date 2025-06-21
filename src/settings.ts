export const profile = {
  fullName: 'Su Nguyen T.',
  nickname: 'su.t',
  title: 'Technical Lead',
  titleReference: 'https://nimblehq.co/compass/team/roles/technical-lead/',
  company: 'nimblehq',
  companyReference: 'https://nimblehq.co/',
  author_name: 'Su T.',
  information: [
    {
      title: 'Technical Lead',
      description: `Experienced Software Engineering with expertise in full-stack development.
        Passionate about building scalable solutions and delivering high-quality software products.`,
      field: 'Software Engineering, Team Leadership',
    },
  ],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: 'vnnts@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vnntsu',
  github: 'https://github.com/vnntsu',
  x: '',
  gitlab: '',
  scholar: '',
  inspire: '',
  arxiv: '',
}

export const template = {
  website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
  darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
  excerptLength: 200,
  postPerPage: 5,
  base: '', // Repository name starting with /
}

export const seo = {
  default_title: `${profile.nickname}.dev`,
  default_description: `${profile.nickname}.dev is a personal website.`,
  default_image: '/images/avatar.png',
}
