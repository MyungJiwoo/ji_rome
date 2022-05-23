const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // todos가 반복되니까 변수화

let toDos = []; // 애초에 빈 배열이기 때문에 새로운 todo가 들어오면 덮어쓰기 됨

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // event로 매개변수 보내고 event.target.parentElement.innerText로 콘솔 확인하면 선택된 li의 value 확인 가능
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id; // db에서도 삭제하기 위해 id값 부여
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.className = "fas fa-times-circle todo-fin";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(), // 로컬 스토리지에서는 text로 인식하기 떄문에 중복 todo에서 어떤 것을 삭제할 지 구분 X => date int로 구분
    };
    toDos.push(newTodoObj); // 이 배열을 로컬 스토리지에 넣고 싶지만 로컬 스토리지는 only text => date 추가하면서 object로 저장
    paintToDo(newTodoObj); // object 넘김
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 예전 배열을 복원해줌 = 빈 배열로 초기화되지 않게 (대신 배열도 let으로 설정)
    parsedToDos.forEach(paintToDo); // 각각의 todo item에 대해 paintToDo로 화면에 출력 = 배열의 요소마다 함수 실행
}
