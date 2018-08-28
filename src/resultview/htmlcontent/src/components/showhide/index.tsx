import { h, Component } from 'preact';
import { IconButton, Icon} from '../iconbutton';

interface Props {
    onToggle: any;
    right: boolean;
}

interface State {

}

export class ShowHide extends Component<Props, State> {
    private icon: Icon = {
        light: `<svg  xmlns="http://www.w3.org/2000/svg" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z" fill="#656565"></path></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z" fill="#C5C5C5"></path></svg>`
    };
    
    render(props: Props, state: State) {
        return (
            <IconButton title={`Show/Hide`} icon={this.icon} ready={true} onclick={props.onToggle}/>
        );
    }
}