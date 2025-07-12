import FirstComponent from "./components/firstComponent";
import SecondComponent from "./components/secondComponent";
import ThirdComponent from "./components/thirdComponent";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">SkillShikshya</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="space-y-16 pb-16">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 SkillShikshya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
