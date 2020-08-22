import * as React from "react";

const ExportHtml: React.FunctionComponent<{}> = () => {
    const fgFill = "var(--vscode-editor-foreground)";
    const actionFill = "var(--vscode-list-highlightForeground)";
    return (
        <svg viewBox="0 0 16 16">
            <g transform="matrix(4.1791045,0,0,4.3076924,-0.04477611,-0.07692331)">
                <path id="fg" fill={fgFill} d="M 1.3627119,2.0050847 1,2.4 1.6,3.1 1.4,3.5 0.4,2.4 0.76440678,2.0033898 Z M 2.6,1.3 3.6,2.4 2.6,3.5 2.4,3.1 3,2.4 2.4,1.7 Z"/>
                <path id="action" fill={actionFill} d="M 2,1 1.25,1.75 h -0.5 l 0.5,-0.5 h -1 V 0.75000004 h 1 l -0.5,-0.5 h 0.5 z"/>
            </g>
        </svg>
    );
};

export default ExportHtml;