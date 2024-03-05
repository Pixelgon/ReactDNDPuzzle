import { Puzzle } from './components/Puzzle'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


function App() {

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Puzzle/>  
      </DndProvider>
    </>
  )
}

export default App
