import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { CommandReader } from "../classes/CommandReader"
import { defaultCommands } from "./exampleCommands"

export const DirectoryManager = () => {
  const [commandReader, setCommandReader] = useState<CommandReader>(new CommandReader())
  const [commands, setCommands] = useState(defaultCommands)
  const [output, setOutput] = useState<string[]>([])

  const executeCommands = () => {
    const newCommandReader = new CommandReader()
    newCommandReader.parseCommands(commands)
    setCommandReader(newCommandReader)
  }

  const listToString = (arr: string[]): string => {
    return arr.join("\n")
  }

  useEffect(() => {
    setOutput(commandReader.getOutput())
  }, [commandReader])

  return (
    <Container fluid style={{ fontFamily: "Inter, sans-serif", color: "rgb(13, 20, 43)" }}>
      <Row style={{ paddingTop: "25px", textAlign: "center" }}>
        <h1 style={{ fontSize: "45px", fontWeight: "700" }}>Endpoint Directory Manager</h1>
        <br></br>
        <h5>The only directory tool you'll ever need</h5>
      </Row>
      <Row style={{ padding: "25px" }}>
        <Col>
          <h4>Input</h4>
          <Card>
            <textarea
              style={{ height: "70vh" }}
              defaultValue={listToString(commands)}
              onChange={e => {
                setCommands(e.target.value.split("\n"))
              }}
            />
          </Card>
          <Button
            style={{
              float: "right",
              marginTop: "10px",
              borderColor: "#1794c2",
              backgroundColor: "#1794c2",
              color: "#fff"
            }}
            onClick={() => {
              executeCommands()
            }}
          >
            Do Magic
          </Button>
        </Col>
        <Col>
          <h4>Output</h4>
          <Card>
            <textarea style={{ height: "70vh" }} value={listToString(output)} readOnly={true} />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
