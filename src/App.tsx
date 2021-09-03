import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <> 
      <Header />
      <TaskList />
      <GlobalStyle />
    </>
  );
}

