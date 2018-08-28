import { h, Component } from 'preact';
import { IconButton} from '../iconbutton';
import { Fetch, Response } from '../fetch';
import { Service } from '../../service/service';

interface Props {
    idx: number;
    right: boolean;
}

interface State {

}

export class ExportCsv extends Component<Props, State> {
    icon = {
        dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><style>.icon-canvas-transparent{opacity:0;fill:#2d2d30}.icon-vs-out{fill:#2d2d30}.icon-vs-bg{fill:#c5c5c5}.icon-vs-fg{fill:#2b282e}.icon-vs-action-blue{fill:#75beff}</style><path class="icon-canvas-transparent" d="M16 16H0V0h16v16z" id="canvas"/><path class="icon-vs-out" d="M14 4.552V13c-.028.825-.593 2-2.035 2h-8C3.012 15 2 14.299 2 13V8H.586l2-2H0V2h2.586l-2-2h4.828l1 1h3.608L14 4.552z" id="outline" style="display: none;"/><path class="icon-vs-fg" d="M9 3.586L8.414 3H9v.586zM12 6h-2v7h2V6zm-6 7V7.414L5.414 8H4v5h2zm1 0h2V4.414l-1 1V6h-.586L7 6.414V13z" id="iconFg" style="display: none;"/><path class="icon-vs-bg" d="M8 5.414V6h-.586L8 5.414zM13 5v8s-.035 1-1.035 1h-8S3 14 3 13V8h1v5h2V7.414l1-1V13h2V4.414L9.414 4 9 3.586V3h-.586l-1-1h2.227L13 5zm-1 1h-2v7h2V6z" id="iconBg"/><path class="icon-vs-action-blue" d="M8 4L5 7H3l2-2H1V3h4L3 1h2l3 3z" id="colorAction"/></svg>`,
        light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><style>.icon-canvas-transparent{opacity:0;fill:#f6f6f6}.icon-vs-out{fill:#f6f6f6}.icon-vs-bg{fill:#424242}.icon-vs-fg{fill:#f0eff1}.icon-vs-action-blue{fill:#00539c}</style><path class="icon-canvas-transparent" d="M16 16H0V0h16v16z" id="canvas"/><path class="icon-vs-out" d="M14 4.552V13c-.028.825-.593 2-2.035 2h-8C3.012 15 2 14.299 2 13V8H.586l2-2H0V2h2.586l-2-2h4.828l1 1h3.608L14 4.552z" id="outline" style="display: none;"/><path class="icon-vs-fg" d="M9 3.586L8.414 3H9v.586zM12 6h-2v7h2V6zm-6 7V7.414L5.414 8H4v5h2zm1 0h2V4.414l-1 1V6h-.586L7 6.414V13z" id="iconFg" style="display: none;"/><path class="icon-vs-bg" d="M8 5.414V6h-.586L8 5.414zM13 5v8s-.035 1-1.035 1h-8S3 14 3 13V8h1v5h2V7.414l1-1V13h2V4.414L9.414 4 9 3.586V3h-.586l-1-1h2.227L13 5zm-1 1h-2v7h2V6z" id="iconBg"/><path class="icon-vs-action-blue" d="M8 4L5 7H3l2-2H1V3h4L3 1h2l3 3z" id="colorAction"/></svg>`
    };

    exportCsv() {
        let service = Service.getInstance();
        service.request({command: `csv:resultSet/${this.props.idx}`});
    }
    
    render(props: Props, state: State) {
        return (
            <Fetch resource={`resultSet/${props.idx}/rows/length`}>
            {
                (response: Response) => (
                    <IconButton title={`Export csv`} icon={this.icon} ready={!response.loading} onclick={this.exportCsv.bind(this)}/>
                )
            }
            </Fetch>
        );
    }
}