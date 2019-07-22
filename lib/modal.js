import React from "react";
import ReactDOM from "react-dom";
import Panel from "./Panel";
import Button from "./Button";
import Input from "./Input";
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
    closeModal: (callback) => {
        const body = document.querySelector("body");
        const modalContainer = document.querySelector("#react-nyx-modal");
        if (modalContainer && body) {
            body.removeChild(modalContainer);
            callback && callback();
        }
    },
    confirm: (message, options) => {
        const { callback } = options;
        modals.dialog(React.createElement(Panel, null,
            React.createElement("div", { style: {
                    padding: "20px !important"
                } }, message),
            React.createElement("div", { style: { textAlign: "right" } },
                React.createElement(Button, { onClick: event => {
                        callback(true);
                        modals.closeModal();
                        event.stopPropagation();
                    } }, "Confirm"),
                React.createElement(Button, { onClick: event => {
                        callback(false);
                        modals.closeModal();
                        event.stopPropagation();
                    } }, "Cancel"))), { callback });
    },
    alert: (message, options) => {
        const { callback } = options || { callback: undefined };
        modals.dialog(React.createElement(Panel, null,
            React.createElement("div", { style: {
                    padding: "20px !important"
                } }, message)), { callback });
    },
    input: (message, options) => {
        const { callback } = options || { callback: undefined };
        modals.dialog(React.createElement(Panel, null,
            React.createElement("div", { style: {
                    padding: "20px !important"
                } }, message),
            React.createElement(Input, null),
            React.createElement("div", { style: { textAlign: "right" } },
                React.createElement(Button, { onClick: event => {
                        const element = document.querySelector("#react-nyx-modal input");
                        const callbackValue = element && element.nodeValue ? element.nodeValue : undefined;
                        callback && callback(callbackValue);
                        modals.closeModal();
                        event.stopPropagation();
                    } }, "Confirm"),
                React.createElement(Button, { onClick: event => {
                        callback(false);
                        modals.closeModal();
                        event.stopPropagation();
                    } }, "Cancel"))), { callback });
    },
    dialog: (child, options) => {
        const { callback } = options || { callback: undefined };
        modals.closeModal();
        const body = document.querySelector("body");
        const modalContainer = document.createElement("div");
        modalContainer.id = "react-nyx-modal";
        const element = (React.createElement("div", { style: {
                backgroundColor: "rgba(0,0,0,0.9)",
                position: "fixed",
                left: "0",
                right: "0",
                top: "0",
                display: "flex",
                bottom: "0",
                alignItems: "center",
                justifyContent: "center"
            }, onClick: event => {
                modals.closeModal(callback);
                event.stopPropagation();
            } },
            React.createElement("div", { style: { background: "black" }, onClick: event => event.stopPropagation() }, child)));
        ReactDOM.render(element, modalContainer);
        body && body.appendChild(modalContainer);
    }
};
export default modals;
//# sourceMappingURL=modal.js.map