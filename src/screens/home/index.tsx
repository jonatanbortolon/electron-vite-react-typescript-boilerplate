import { useEffect, useState } from "react";
import { Container } from "./styles";

function HomeScreen() {
  const [os, setOs] = useState("");

  async function getOs() {
    const osHandler = await window.ipc.getOs();

    setOs(osHandler);
  }

  useEffect(() => {
    getOs();
  }, [])

  return (
    <Container>
      <h1>Welcome {os}</h1>
      <span style={{fontWeight: 100 }}>Hello 100</span>
      <span style={{fontWeight: 200 }}>Hello 200</span>
      <span style={{fontWeight: 300 }}>Hello 300</span>
      <span style={{fontWeight: 400 }}>Hello 400</span>
      <span style={{fontWeight: 500 }}>Hello 500</span>
      <span style={{fontWeight: 600 }}>Hello 600</span>
      <span style={{fontWeight: 700 }}>Hello 700</span>
      <span style={{fontWeight: 800 }}>Hello 800</span>
      <span style={{fontWeight: 900 }}>Hello 900</span>
      <span style={{fontWeight: 100, fontStyle: "italic"}}>Hello 100 Italic</span>
      <span style={{fontWeight: 200, fontStyle: "italic"}}>Hello 200 Italic</span>
      <span style={{fontWeight: 300, fontStyle: "italic"}}>Hello 300 Italic</span>
      <span style={{fontWeight: 400, fontStyle: "italic"}}>Hello 400 Italic</span>
      <span style={{fontWeight: 500, fontStyle: "italic"}}>Hello 500 Italic</span>
      <span style={{fontWeight: 600, fontStyle: "italic"}}>Hello 600 Italic</span>
      <span style={{fontWeight: 700, fontStyle: "italic"}}>Hello 700 Italic</span>
      <span style={{fontWeight: 800, fontStyle: "italic"}}>Hello 800 Italic</span>
      <span style={{fontWeight: 900, fontStyle: "italic"}}>Hello 900 Italic</span>
    </Container>
  );
}

export default HomeScreen;