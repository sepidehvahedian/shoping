import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [courses, setCourses] = useState([
    { id: 1, name: "javaScript", complate: false },
    { id: 2, name: "C#", complate: false },
    { id: 3, name: "python", complate: false },
    { id: 4, name: "react", complate: false },
  ]);

  const deleteHandler = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const addHandler = () => {
    setCourses((prevState) => [
      ...prevState,
      { id: prevState.length + 1, name: text, complate: false },
    ]);
    setText(""); // پاک کردن ورودی بعد از اضافه کردن
  };

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const complateHandler = (id) => {
    const selectedCourse = courses.find((course) => course.id == id);
    if (selectedCourse) {
      const updateCources = courses.map((course) =>
        course.id == id ? { ...course, complate: !course.complate } : course
      );
      setCourses(updateCources);
    }
  };

  return (
    <div className="App">
      {/* بخش دکمه "add" و input */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 20px",
        }}
      >
        <input
          type="text"
          value={text}
          onChange={inputHandler}
          placeholder="Enter course name"
        />
        <button onClick={addHandler}>Add</button>
      </div>

      {/* نمایش دوره‌ها */}
      {courses.map((course) => (
        <div key={course.id} style={{ marginBottom: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ccc", // اضافه کردن خط جدا کننده
              paddingBottom: "10px",
              margin: "20px 20px",
              backgroundColor: course.complate && "green",
            }}
          >
            <p>{course.name}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "10px",
              }}
            >
              <button onClick={() => deleteHandler(course.id)}>Delete</button>
              <button onClick={() => complateHandler(course.id)}>
                Complate
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
