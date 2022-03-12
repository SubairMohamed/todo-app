
function App() {
  return (
    <div className="flex min-h-screen">
      {/* left side  */}
      <aside id="left" className="bg-orange-500 w-20 lg:w-28 flex-none">
        aside left
      </aside>

      {/* Main */}
      <section id="main" className="bg-blue-500 grow">
        <header>header</header>
        <main>main</main>
      </section>

      {/* right side  */}
      <aside id="right" className="bg-green-500 sm:hidden md:block md:w-80 lg:w-96">
        aside right
      </aside>
    </div>
  );
}

export default App;
