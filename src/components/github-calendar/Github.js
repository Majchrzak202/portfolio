import React from "react";
import GitHubCalendar from "react-github-calendar";

const colorTheme = {
  background: "transparent",
  text: "#ffffff",
  grade4: "#8400b8",
  grade3: "#b22ff4",
  grade2: "#b265f6",
  grade1: "#c084f5",
  grade0: "#ecd9fc",
};

const Github = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "30px",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontWeight: 800,
          fontStyle: "Open Sans",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        How i code:{" "}
      </h1>
      <GitHubCalendar
        username="Majchrzak202"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={colorTheme}
      />
    </div>
  );
};

export default Github;
