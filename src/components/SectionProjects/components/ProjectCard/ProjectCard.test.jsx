import { shallow } from 'enzyme';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    image: 'test-image.jpg',
    id: 1,
    title: 'Test Project',
    description: 'This is a test project',
    deploy: 'http://example.com',
    github: 'http://github.com',
    technologies: ['React', 'Next.js'],
  };

  it('should render the project image with correct props', () => {
    const wrapper = shallow(<ProjectCard {...mockProject} />);
    const imageComponent = wrapper.find('Image');
    expect(imageComponent.prop('width')).toBe(420);
    expect(imageComponent.prop('height')).toBe(286);
    expect(imageComponent.prop('src')).toBe(mockProject.image);
    expect(imageComponent.prop('alt')).toBe(`prewiew ${mockProject.title}`);
  });

  it('should render the project title correctly', () => {
    const wrapper = shallow(<ProjectCard {...mockProject} />);
    const titleElement = wrapper.find('h3');
    expect(titleElement.text()).toBe(mockProject.title);
  });

  it('should render the GitHub button if GitHub link is provided', () => {
    const wrapper = shallow(<ProjectCard {...mockProject} />);
    const githubButton = wrapper.find('button').first();
    expect(githubButton.exists()).toBe(true);
    expect(githubButton.text()).toContain('Github');
    expect(githubButton.find('AiOutlineGithub').exists()).toBe(true);
  });

  it('should render the Deploy button if deploy link is provided', () => {
    const wrapper = shallow(<ProjectCard {...mockProject} />);
    const deployButton = wrapper.find('button').last();
    expect(deployButton.exists()).toBe(true);
    expect(deployButton.text()).toContain('Сайт');
    expect(deployButton.find('AiOutlineGlobal').exists()).toBe(true);
  });

  it('should render the Link with correct path', () => {
    const wrapper = shallow(<ProjectCard {...mockProject} />);
    const linkComponent = wrapper.find('Link');
    expect(linkComponent.prop('href')).toBe(`/project/${mockProject.id}`);
  });
});



// import React from 'react';
// import { shallow } from 'enzyme';
// import { ProjectCard } from './ProjectCard';

// describe('ProjectCard', () => {
//   const mockProject = {
//     image: 'test-image.jpg',
//     id: 1,
//     title: 'Test Project',
//     description: 'This is a test project',
//     deploy: 'http://example.com',
//     github: 'http://github.com',
//     technologies: ['React', 'Next.js'],
//   };

//   it('should render the project image with correct props', () => {
//     const wrapper = shallow(<ProjectCard {...mockProject} />);
//     const imageComponent = wrapper.find('Image');
//     expect(imageComponent.prop('width')).toBe(420);
//     expect(imageComponent.prop('height')).toBe(286);
//     expect(imageComponent.prop('src')).toBe(mockProject.image);
//     expect(imageComponent.prop('alt')).toBe(`prewiew ${mockProject.title}`);
//   });

//   // Другие тесты для компонента...
// });