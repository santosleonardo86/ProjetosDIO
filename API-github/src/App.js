import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/dark-mode/globalStyles";
import { lightTheme, darkTheme } from "./components/dark-mode/themes"
import { useDarkMode } from "./components/dark-mode/useDarkMode"
import Toggle from "./components/dark-mode/toggler"


const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const { githubState } = useGithub();

  if (!mountedComponent) return <div />
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </>
      </ThemeProvider>

      <Layout>
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (
              <p>Loading</p>
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
        ) : (
          <NoSearch />
        )}
      </Layout>
    </>

  );
};

export default App;

