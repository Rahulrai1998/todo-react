function App() {
  return (
    <center className="todo-container">
      <h1>Todo App</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-5">
            <input type="text" placeholder="enter todo here" />
          </div>
          <div class="col-5">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-5">text</div>
          <div class="col-5">text</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-5">text</div>
          <div class="col-5">text</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
