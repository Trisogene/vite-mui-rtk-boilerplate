# ⚡ Vite + MUI + Redux Toolkit Boilerplate ⚡

Welcome to your Vite, Material-UI (MUI), and Redux Toolkit boilerplate project!

This setup gives you a fast, modern, and scalable foundation for building React apps.

With everything from theme management to state handling already configured, you're ready to start coding your next app in no time!

## 🚀 Features

- Blazing fast development with Vite
- Beautiful and customizable UI with Material-UI
- State management made easy with Redux Toolkit
- Pre-configured global theming in src/theme.tsx
- Example slice and Redux store set up out of the box

## 🚀 Starting a New Project with This Boilerplate

To start a new project using this boilerplate, follow these steps:

1. **Clone the Boilerplate Repository**:

   - Open a terminal in Visual Studio Code.
   - Run the following command to clone your boilerplate repository (replace my-project with your project)
     ```sh
     git clone https://github.com/Trisogene/vite-mui-rtk-boilerplate.git my-project
     cd my-project
     ```

2. **Remove the Existing Git History**:

   - This step ensures that your new project does not carry over the commit history from the boilerplate.
     ```sh
     rm -rf .git
     ```

3. **Initialize a New Git Repository**:

   - Initialize a new Git repository for your new project.
     ```sh
     git init
     ```

4. **Install Dependencies**:

   - Install the project dependencies using npm or yarn.
     ```sh
     npm install
     # or
     yarn install
     ```

5. **Update Project Information**:

   - Update the `package.json` file with your new project's information (e.g., name, version, description).

6. **Make Initial Commit**:

   - Add all files to the new Git repository and make the initial commit.
     ```sh
     git add .
     git commit -m "Initial commit from boilerplate"
     ```

7. **Create a New Repository on GitHub**:

   - Go to GitHub and create a new repository for your new project.

8. **Add Remote and Push to GitHub**:
   - Add the new GitHub repository as a remote and push your initial commit.
     ```sh
     git remote add origin <new-repo-url>
     git branch -M main
     git push -u origin main
     ```

By following these steps, you will have a new project initialized from your boilerplate, ready for further development.

## ⚡ Quick Start

1. Clone the repository:
   git clone https://github.com/your-repo-url.git
   cd your-project-folder

2. Install dependencies:
   npm install

3. Start developing:
   npm run dev

   Open http://localhost:3000 to view it in the browser.

## 🗂️ Project Structure

    src/
    ├── components/    # Your React components go here
    ├── lib/           # Logic, Hooks and functions go here
    ├── theme.tsx      # MUI theme configuration
    └── ...            # Other app-related files

### 🌈 Customizing the Theme

The default theme is defined in `src/theme.tsx`. Modify this file to change your app's look and feel with MUI’s powerful theming capabilities.

Explore the [MUI theming guide](https://mui.com/customization/theming/) to make it truly yours!

### 🗃️ State Management with Redux Toolkit

The store is pre-configured in `src/store` using [Redux Toolkit](https://redux-toolkit.js.org/). A sample slice is provided to help you get started managing your app’s state. Access the state using the `useRtk` hook:

    import { useRtk } from './store';

    const data = useRtk(state => state.example);

Read more about [Redux Toolkit](https://redux-toolkit.js.org/) to make your state management as seamless as possible.

## 📚 Documentation & Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [Material-UI Documentation](https://mui.com/getting-started/usage/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)

## 🤝 Contributing

Contributions are what make the open-source community such a wonderful place! Feel free to fork this repository and submit a pull request with improvements or new features.

---

Start building something amazing today with this powerful boilerplate! 🎉
