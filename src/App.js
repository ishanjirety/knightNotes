import './App.css';
import { Editor, Guide } from './components'
import { useEffect, useState } from 'react'

function App() {
  const [guide, setGuide] = useState(false)
  useEffect(() => {
    setGuide(true)
  }, [])
  return (
    <div className="App gap-y-10 flex flex-col justify-center pl-20 pt-24 bg-black-850 w-screen h-screen text-white pb-20">
      {/* Editor component with action tray */}
      <Editor />
      {/* Onboarding guide */}
      {guide && <Guide state={setGuide} />}
    </div>
  );
}

export default App;
