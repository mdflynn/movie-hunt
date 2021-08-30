# Movie Hunt

---

## Overview

An app to search movies and find out more details about them!

Check it out on [Heroku](https://movie-hunt.herokuapp.com/)!

## Goals

- Deployed application
- Modern styling with well-organized CSS
- Using TypeScript is highly encouraged
- No use of third-party component libraries such as Bootstrap or Material-UI
- Using Create-React-App, Next.js, or Gatsby as a starter kit is okay
- Well organized file structure
- Descriptive naming conventions
- DRY code that is readable and production ready
- Reusable components
- Sound logic for how the search and filter are architected
- Full Git history with atomic commits

<details>
  <summary>Set up</summary>

- Clone the repository down and cd into the repo on your local machine.
- Install the library dependencies by running:
  - `npm install`
- To verify that it is setup correctly, run `npm start` in your terminal.
- Go to `http://localhost:3000/` and the site should display and have functionality.
- Enter `control + c` in your terminal to stop the server at any time.
</details>

## Technologies and Tools

> - React
> - TypeScript
> - JSX
> - HTML
> - CSS
> - git
> - GitHub
> - REST Api

## Wins
* Successfully deploying the app!! It felt great to finally get it deployed after the windfall of type errors :D

* I definitely learned a lot more about TypeScript and felt that I'm much stronger with my TypeScript knowledge.
## Challenges
#### Deployment
How I imported the pictures into the file has caused an issue with deployment. `require.context` has been throwing consistent errors that I have not been able to clear. I rewrote how I imported all of the images in order to clear the error until I can figure out exactly why my error wasn't clearing.

#### npm Type packages
I had difficulties with `@types/react-router-dom`. Every resource online said this was the way to clear my specific error. But I tried deleting my `node_modules` and reinstalling all packages but I could not find a way to make it work. So I had add `@ts-ignore` to the `react-router-dom` imports so that the app could be deployed. 

#### branches/git history
I was really happy with my commits and pull request history up until I ran into all of the issue with deployment. It became more sporadic and not as thorough. I felt rushed with timing and didn't follow my normal plan. It was a great learning lesson to slow down no matter what and follow your steps.
## Site Design

### Home Page

<img width="1400" alt="main page" src="https://i.imgur.com/dQO1yBy.jpg">

### Movie Page

<img width="1400" alt="main page" src="https://i.imgur.com/mIZwf9f.png">

### Search and Filter

<img width="1400" alt="main page" src="https://media.giphy.com/media/Va4LsgybBoP93aO2uq/giphy.gif?cid=790b7611851bde79fef8cbd016819f650ad56a4cae8ef36a&rid=giphy.gif&ct=g">

#### Contributors:

- [Mike Flynn](https://github.com/mdflynn)

<img src="https://avatars1.githubusercontent.com/u/64620860?s=460&u=22fbddd0d55029892d0c73c4b37808a36d5aa1bd&v=4" alt="Mike Flynn"
 width="150" height="auto" />
