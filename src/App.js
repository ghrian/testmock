import { Button, Card, Tag } from "antd";
import "./App.css";
import flash from "./icons/flash.svg";
import brain from "./icons/brain.svg";
import chat from "./icons/chat.svg";
import eye from "./icons/eye.svg";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-center">
        <div>
          <div
            className="card1 rounded-sm shadow-sm grid"
            style={{
              width: 400,
              height: 500,
              // backgroundColor: "6140FC",
              borderRadius: 30,
            }}
          >
            <p
              className="flex justify-center text-xl font-bold mt-10"
              style={{ color: "white" }}
            >
              Your Result
            </p>
            <div className="flex justify-center">

            <div
              className="flex flex-col items-center justify-center"
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                backgroundColor: "black",
                opacity: "30%",
              }}
            >
              <p
                className="flex items-center text-7xl font-bold"
                style={{ color: "white" }}
              >
                76
              </p>
              <p
                className="flex items-center font-bold"
                style={{ color: "white" }}
              >
                of 100
              </p>
            </div>
            </div>
            <h1
              className="flex justify-center text-4xl font-bold"
              style={{ color: "white" }}
            >
              Great
            </h1>
            <p
              className="flex justify-center font-bold"
              style={{ color: "white" }}
            >
              Your performance exceed 65%
            </p>
            <p
              className="flex justify-center font-bold"
              style={{ color: "white" }}
            >
              of the people conducting the test here
            </p>
            <p
              className="flex justify-center font-bold"
              style={{ color: "white" }}
            >
              the test here!
            </p>
          </div>
        </div>

        <div>
          <div
            className="flex justify-center items-center rounded-sm shadow-sm"
            style={{
              width: 400,
              height: 500,
              backgroundColor: "#f2f2f2",
              borderRadius: 30,
            }}
          >
            <div>
            <p className="flex justify-start text-xl font-bold mb-5">
              Summary
            </p>
              <div
                className="flex rounded-sm mb-3"
                style={{
                  width: 300,
                  height: 40,
                  backgroundColor: "#ffe3e3",
                  borderRadius: 10,
                }}
              >
                <img className="ml-5" src={flash} width={20}></img>
                <div className="flex items-center justify-between w-full">
                  <p className="ml-2" style={{ color: "red" }}>
                    Reaction
                  </p>
                  <div className="flex mr-5">
                    <p>
                      <b>80 </b>/ 100
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex rounded-sm mb-3"
                style={{
                  width: 300,
                  height: 40,
                  backgroundColor: "#fff0e3",
                  borderRadius: 10,
                }}
              >
                <img className="ml-5" src={brain} width={20}></img>
                <div className="flex items-center justify-between w-full">
                  <p className="ml-2" style={{ color: "orange" }}>
                    Memory
                  </p>
                  <div className="mr-5">
                    <p>
                      <b>92 </b>/ 100
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex rounded-sm mb-3"
                style={{
                  width: 300,
                  height: 40,
                  backgroundColor: "#dbffe5",
                  borderRadius: 10,
                }}
              >
                <img className="ml-5" src={chat} width={20}></img>
                <div className="flex items-center justify-between w-full">
                  <p className="ml-2" style={{ color: "green" }}>
                    Verbal
                  </p>
                  <div className="mr-5">
                    <p>
                      <b>61 </b>/ 100
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex rounded-sm mb-3"
                style={{
                  width: 300,
                  height: 40,
                  backgroundColor: "#c4ddff",
                  borderRadius: 10,
                }}
              >
                <img className="ml-5" src={eye} width={20}></img>
                <div className="flex items-center justify-between w-full">
                  <p className="ml-2" style={{ color: "blue" }}>
                    Visual
                  </p>
                  <div className="mr-5">
                    <p>
                      <b>73 </b>/ 100
                    </p>
                  </div>
                </div>
              </div>

              <Button
                style={{
                  width: 300,
                  height: 40,
                  backgroundColor: "#00193b",
                  borderRadius: 50,
                  color: "white",
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
