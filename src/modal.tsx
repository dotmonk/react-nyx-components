import React from "react";
import ReactDOM from "react-dom";
import Panel from "./Panel";
import Button from "./Button";
import Input from "./Input";

type Callback = (result?: boolean | string) => any;

type Options = {
  callback: Callback;
};

/*
  options:
  - callback
  - title
  - escapable, on escape key or clicking backdrop
  - backdropStyle
  - color
  - message
*/
const modals = {
  closeModal: (callback?: Callback) => {
    const body = document.querySelector("body");
    const modalContainer = document.querySelector("#react-nyx-modal");
    if (modalContainer && body) {
      body.removeChild(modalContainer);
      callback && callback();
    }
  },
  confirm: (message: any, options: Options) => {
    const { callback } = options;
    modals.dialog(
      <Panel>
        <div
          style={{
            padding: "20px !important"
          }}
        >
          {message}
        </div>
        <div style={{ textAlign: "right" }}>
          <Button
            onClick={event => {
              callback(true);
              modals.closeModal();
              event.stopPropagation();
            }}
          >
            Confirm
          </Button>
          <Button
            onClick={event => {
              callback(false);
              modals.closeModal();
              event.stopPropagation();
            }}
          >
            Cancel
          </Button>
        </div>
      </Panel>,
      { callback }
    );
  },
  alert: (message: any, options: Options) => {
    const { callback } = options || { callback: undefined };
    modals.dialog(
      <Panel>
        <div
          style={{
            padding: "20px !important"
          }}
        >
          {message}
        </div>
      </Panel>,
      { callback }
    );
  },
  input: (message: any, options: Options) => {
    const { callback } = options || { callback: undefined };
    modals.dialog(
      <Panel>
        <div
          style={{
            padding: "20px !important"
          }}
        >
          {message}
        </div>
        <Input />
        <div style={{ textAlign: "right" }}>
          <Button
            onClick={event => {
              const element = document.querySelector("#react-nyx-modal input");
              const callbackValue =
                element && element.nodeValue ? element.nodeValue : undefined;
              callback && callback(callbackValue);
              modals.closeModal();
              event.stopPropagation();
            }}
          >
            Confirm
          </Button>
          <Button
            onClick={event => {
              callback(false);
              modals.closeModal();
              event.stopPropagation();
            }}
          >
            Cancel
          </Button>
        </div>
      </Panel>,
      { callback }
    );
  },
  dialog: (child: any, options?: Options) => {
    const { callback } = options || { callback: undefined };
    modals.closeModal();
    const body = document.querySelector("body");
    const modalContainer = document.createElement("div");
    modalContainer.id = "react-nyx-modal";
    const element = (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.9)",
          position: "fixed",
          left: "0",
          right: "0",
          top: "0",
          display: "flex",
          bottom: "0",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={event => {
          modals.closeModal(callback);
          event.stopPropagation();
        }}
      >
        <div
          style={{ background: "black" }}
          onClick={event => event.stopPropagation()}
        >
          {child}
        </div>
      </div>
    );
    ReactDOM.render(element, modalContainer);
    body && body.appendChild(modalContainer);
  }
};

export default modals;
