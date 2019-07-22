import React, { Component } from "react";
import "css-nyx-theme/nyx.min.css";
import {
  modal,
  Button,
  Input,
  Select,
  Panel,
  Textarea,
  Label,
  Loading,
  Radiobutton,
  Checkbox,
  Link,
  Tooltip
} from "../src";

const testColors = ["standard", "bright", "success", "error"];

type Props = {};

type State = {
  selectPropValue?: boolean;
};

class NyxTest extends Component<Props, State> {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>React Nyx Components</h2>
        <h3>Button</h3>
        <h4>Normal buttons</h4>
        {testColors.map(color => (
          <Button key={color} color={color}>
            Test {color}
          </Button>
        ))}
        <br />
        <h4>Active buttons</h4>
        {testColors.map(color => (
          <Button key={color} color={color} active={true}>
            Test {color}
          </Button>
        ))}
        <br />
        <h4>Disabled buttons</h4>
        {testColors.map(color => (
          <Button key={color} color={color} disabled={true}>
            Test {color}
          </Button>
        ))}
        <h3>Input</h3>
        <h4>Normal input</h4>
        {testColors.map(color => (
          <Input key={color} color={color} defaultValue={`Test ${color}`} />
        ))}
        <br />
        <h4>Disabled input</h4>
        {testColors.map(color => (
          <Input
            key={color}
            color={color}
            disabled={true}
            defaultValue={`Test ${color}`}
          />
        ))}
        <br />
        <h3>Select</h3>
        <h4>Normal Select</h4>
        {testColors.map(color => (
          <Select
            color={color}
            key={color}
            onChange={(value: any) => alert(value)}
            options={[
              { name: "Option #1", value: "option1" },
              { name: "Option #2", value: "option2" }
            ]}
          />
        ))}
        <br />
        <h4>Normal Select with selected item</h4>
        {testColors.map(color => (
          <Select
            color={color}
            key={color}
            onChange={(value: any) => alert(value)}
            value="option2"
            options={[
              { name: "Option #1", value: "option1" },
              { name: "Option #2", value: "option2" }
            ]}
          />
        ))}
        <br />
        <h4>Select with props update</h4>
        <Select
          onChange={(value: any) =>
            (this.state = {
              selectPropValue: value
            })
          }
          value={this.state.selectPropValue}
          placeholder="Select and change"
          options={[
            { name: "Option #1", value: "option1" },
            { name: "Option #2", value: "option2" },
            { name: "Option #3", value: "option3" }
          ]}
        />
        <br />
        <h3>Modals</h3>
        <h4>Buttons with modals</h4>
        <Button
          onClick={() =>
            modal.dialog(
              <Panel>
                <h1>A Modal</h1>
                Some text
                <Button>A button</Button>
              </Panel>,
              { callback: result => console.log(result) }
            )
          }
        >
          Dialog
        </Button>
        <Button
          onClick={() =>
            modal.alert("This is the alert message.", {
              callback: result => console.log(result)
            })
          }
        >
          Alert
        </Button>
        <Button
          onClick={() =>
            modal.confirm("This is the alert message?", {
              callback: result => console.log(result)
            })
          }
        >
          Confirm
        </Button>
        <Button
          onClick={() =>
            modal.input("What is your message?", {
              callback: result => console.log(result)
            })
          }
        >
          Input
        </Button>
        <br />
        <h3>Textarea</h3>
        {testColors.map(color => (
          <Textarea key={color} color={color} defaultValue="Test" />
        ))}
        <br />
        <h3>Panel</h3>
        {testColors.map(color => (
          <Panel key={color} color={color}>
            <h5>Test</h5>
            Text for testing
            <br />
            <a href="#">Test link</a>
            <br />
            <Button color={color}>Button</Button>
            <br />
            <Input color={color} />
          </Panel>
        ))}
        <br />
        <h3>Label</h3>
        {testColors.map(color => (
          <Label key={color} color={color}>
            {color}
          </Label>
        ))}
        <br />
        <h3>Loading</h3>
        {testColors.map(color => (
          <Loading key={color} color={color}>
            Loading...
          </Loading>
        ))}
        <br />
        <h3>Tooltip</h3>
        <div style={{ textAlign: "center" }}>
          {testColors.map(color => (
            <Tooltip color={color} tooltip={"String with text"}>
              <Label color={color}>Hover me {color}</Label>
            </Tooltip>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          {testColors.map(color => (
            <Tooltip
              color={color}
              tooltip={
                <span>
                  String with <b>text</b>
                </span>
              }
            >
              <Label>Hover me 2 {color}</Label>
            </Tooltip>
          ))}
        </div>
        <br />
        <h3>Checkbox</h3>
        {testColors.map(color => (
          <span key={color}>
            <Checkbox color={color} /> A Checkbox {color}
            <br />
          </span>
        ))}
        <h3>Radiobutton</h3>
        {testColors.map(color => (
          <span key={color}>
            <Radiobutton color={color} /> A Radiobutton {color}
            <br />
          </span>
        ))}
        <h3>Link</h3>
        {testColors.map(color => (
          <Link color={color}>A Link {color}</Link>
        ))}

        <h3>Combination experiments</h3>
        <Panel>
          <div>
            <h2>
              Test
              <Button
                style={{
                  float: "right"
                }}
              >
                Test 1
              </Button>
              <Button
                style={{
                  float: "right"
                }}
              >
                Test 2<Label color="success">status</Label>
              </Button>
              <Button
                color="error"
                style={{
                  float: "right"
                }}
              >
                Test 3
              </Button>
            </h2>
          </div>
          <Panel>
            Contents 1
            <Panel color="error">
              Contents 2
              <Panel>
                Contents 3<Panel>Contents 4</Panel>
              </Panel>
            </Panel>
          </Panel>
        </Panel>
      </div>
    );
  }
}

export default NyxTest;
