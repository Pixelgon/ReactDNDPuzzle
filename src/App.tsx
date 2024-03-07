import { Puzzle } from './components/puzzle'
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import { PuzzleProvider } from './providers/PuzzleProvider';


function App() {
  return (
    <>
      <PuzzleProvider>
        <DndProvider backend={HTML5Backend}>
            <Puzzle/>  
        </DndProvider>  
      </PuzzleProvider>
    </>
  )
}

export default App
