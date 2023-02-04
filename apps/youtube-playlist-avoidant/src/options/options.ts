import { h, Component, render } from "preact";
import htm from "htm";
import {css, keyframes} from "@emotion/css";

const html = htm.bind(h);

const fadeInThenOut = keyframes`
    0% {
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;
const fadeInThenOutClassName = css`
    animation: ${fadeInThenOut} 3s ease-in-out;
`

interface AppState {
    oneclick?: boolean;
    [name: string]: any;
}

class App extends Component<{}, AppState> {
    constructor(props: {}, context: {}) {
        super(props, context);
        this.initializeSettings = this.initializeSettings.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(): Promise<void> {
        Object.assign(document.body.style, {
            backgroundColor: "#f5f5f0"
        });
        await this.initializeSettings();
    }

    async initializeSettings(): Promise<void> {
        const settings = await chrome.storage.sync.get({
            oneclick: false,
        });
        this.setState((prevState) => {
            return { ...prevState, ...settings };
        });
    }

    handleChange(fieldName: string, event: InputEvent) {
        const input = event.target as HTMLInputElement;
        if (input.type === "checkbox") {
            this.setState({
                [fieldName]: input.checked
            });
        } else {
            this.setState({
                [fieldName]: input.value
            });
        }
    }

    async handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        await chrome.storage.sync.set({ ...this.state });
        const successIndicator = document.getElementById("success-indicator");
        successIndicator?.classList.remove(fadeInThenOutClassName);
        successIndicator?.classList.add(fadeInThenOutClassName);
    }

    render() {
        return html`
            <form onsubmit=${this.handleSubmit}>
                <div style=${{ maxWidth: "400px", margin: "auto", padding: "20px", backgroundColor: "#ffffff" }}>
                    <h1>YouTube Playlist Avoidant (pending)</h1>
                    <div style=${{ display: "flex" , flexDirection: "row" , alignItems: "center" }}
                        title="Open video in playlist's thumbnail without right-click">
                        <label for="oneclick">One click</label>
                        <input type="checkbox" name="oneclick" id="oneclick" checked=${this.state.oneclick} onchange=${(event:
                            InputEvent) => this.handleChange("oneclick", event)}
                        />
                    </div>
                    <br />
                    <div>
                        <button type="submit">Save</button>
                        <span style="padding-left: 15px;font-style: italic;opacity: 0;" id="success-indicator">OK</span>
                    </div>
                </div>
            </form>
        `;
    }
}

render(html`<${App} />`, document.body);
