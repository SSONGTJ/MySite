import { SvgIcon } from '@mui/material';
import styled from 'styled-components';

function Skills() {
    const BottomBorder = styled.div`
        border-bottom: 0.5px solid rgb(255, 252, 236, 0.5);
        margin-bottom: 10px;
    `;
    const SkillAb = styled.div`
        margin: 10px 0;
        color: #fffdf1;
    `;
    const StyleDiv = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 12px;
    `;
    const IconDiv = styled.div`
        background-color: rgb(255, 252, 236);
        color: #111;
        display: inline-flex;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
        line-height: 160%;
        padding: 2px 8px;
        border: 1px solid #212121;
        border-radius: 4px;
        align-items: center;
        > svg {
            margin-right: 4px;
        }
    `;
    return (
        <div>
            <SkillAb>
                <h1>SKILLS ABILITY</h1>
                <h2>Language/Framework/Library</h2>
                <h3>할 수 있어요</h3>
                <StyleDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="rgb(97, 218, 251)"
                            >
                                <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 00-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 00-3.107-.534A23.892 23.892 0 0012.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 00-3.113.538 15.02 15.02 0 01-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 01-4.412.005 26.64 26.64 0 01-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 011.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0112 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 00-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 00-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 00-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 001.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 01-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 01-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                            </svg>
                        </SvgIcon>
                        react.js
                    </IconDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="rgb(247, 223, 30)"
                            >
                                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                            </svg>
                        </SvgIcon>
                        JavaScript
                    </IconDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="rgb(227, 79, 38)"
                            >
                                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                            </svg>
                        </SvgIcon>
                        html
                    </IconDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="rgb(21, 114, 182)"
                            >
                                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                            </svg>
                        </SvgIcon>
                        css
                    </IconDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 318 318"
                                xmlns="http://www.w3.org/2000/svg"
                                width="2500"
                                height="2500"
                            >
                                <defs>
                                    <path
                                        id="styled-components_svg__a"
                                        d="M0 0h318v318H0z"
                                    ></path>
                                    <mask
                                        id="styled-components_svg__b"
                                        fill="#fff"
                                        height="318"
                                        width="318"
                                        x="0"
                                        y="0"
                                    >
                                        <use xlink:href="#styled-components_svg__a"></use>
                                    </mask>
                                </defs>
                                <g fill="none" fill-rule="evenodd">
                                    <use
                                        mask="url(#styled-components_svg__b)"
                                        stroke="#4a4a4a"
                                        stroke-width="8"
                                        xlink:href="#styled-components_svg__a"
                                    ></use>
                                    <path
                                        d="M44.284 229.416c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zm20.412 15.732l1.62 2.952c-1.368.972-3.096 1.44-4.788 1.44-3.744-.036-5.724-2.16-5.724-6.228v-10.044h-2.988v-3.312h2.988v-4.212l4.608-.54v4.752h4.428l-.468 3.312h-3.96v9.936c0 1.872.612 2.628 2.016 2.628.72 0 1.44-.216 2.268-.684zm19.62-15.192l-6.192 19.116c-1.44 4.464-4.248 7.344-9.9 7.776l-.468-3.348c3.78-.576 5.004-1.8 6.084-4.5h-1.584l-6.048-19.044h4.896l4.14 15.984 4.32-15.984zm7.308 19.584a7.55 7.55 0 003.06-.648l-.972-3.24c-.324.108-.648.18-1.08.18-.756 0-1.08-.432-1.08-1.332v-22.68l-4.608.504v22.32c0 3.132 1.764 4.896 4.68 4.896zm21.744-10.512c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm20.124-16.092l4.608.504V249h-4.068l-.324-2.412c-1.152 1.728-2.988 2.952-5.436 2.952-4.752 0-7.236-3.996-7.236-10.044 0-5.868 2.952-10.08 7.668-10.08 2.016 0 3.6.864 4.788 2.052zm-3.924 24.228c1.692 0 2.844-.828 3.924-2.448v-8.712c-1.008-1.224-2.088-2.016-3.636-2.016-2.376 0-3.96 2.016-3.96 6.588 0 4.896 1.404 6.588 3.672 6.588zM44.44 265.416c-5.472 0-8.892 4.14-8.892 10.224s3.42 9.9 8.928 9.9c2.448 0 4.428-.792 6.156-2.196l-2.052-2.916c-1.404.9-2.412 1.368-3.852 1.368-2.592 0-4.284-1.62-4.284-6.228 0-4.572 1.62-6.516 4.284-6.516 1.44 0 2.592.432 3.852 1.368l2.052-2.772c-1.8-1.548-3.708-2.232-6.192-2.232zm17.316 0c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm33.444-3.492c-2.52 0-4.284 1.224-5.724 3.204-.72-2.016-2.376-3.204-4.608-3.204-2.412 0-4.14 1.116-5.508 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.636-2.88 1.116 0 2.088.684 2.088 3.06V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.6-2.88 1.152 0 2.088.684 2.088 3.06V285h4.608v-13.788c0-3.6-2.016-5.796-5.04-5.796zm20.268 0c4.968 0 7.056 3.924 7.056 10.008 0 5.832-2.7 10.116-7.524 10.116-1.944 0-3.6-.684-4.788-2.088v8.892l-4.608.504v-26.892h4.032l.252 2.34c1.512-1.98 3.528-2.88 5.58-2.88zm-1.764 16.596c2.52 0 3.996-1.944 3.996-6.552 0-4.824-1.296-6.588-3.6-6.588-1.62 0-2.988 1.116-3.888 2.592v8.568c.9 1.332 2.052 1.98 3.492 1.98zm21.132-16.596c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm23.4-3.492c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm26.388 9.612c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm18.864-8.496c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm20.052 15.732c-.828.468-1.548.684-2.268.684-1.404 0-2.016-.756-2.016-2.628v-9.936h3.96l.468-3.312h-4.428v-4.752l-4.608.54v4.212h-2.988v3.312h2.988v10.044c0 4.068 1.98 6.192 5.724 6.228 1.692 0 3.42-.468 4.788-1.44zm10.224-15.732c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zM79.8 87.2l-36.2 22.5 36.2 22.9-3.7 4.6-37.7-23.6v-7.9l38.1-23.6m189.3 22.7v7.8l-37.7 23.6-3.7-4.9 36.1-22.6L224.4 86l3.2-4.9"
                                        fill="#4a4a4a"
                                    ></path>
                                    <text
                                        fill="#000"
                                        font-family="AppleColorEmoji, Apple Color Emoji"
                                        font-size="100"
                                        letter-spacing="0.5"
                                        transform="translate(38 44)"
                                    >
                                        <tspan x="70" y="100">
                                            💅
                                        </tspan>
                                    </text>
                                </g>
                            </svg>
                        </SvgIcon>
                        styled components
                    </IconDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="rgb(240, 80, 50)"
                            >
                                <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.848 1.848 0 010 2.6 1.844 1.844 0 01-2.609 0 1.834 1.834 0 010-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 01-.996-2.41L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 002.186 0l10.43-10.43a1.544 1.544 0 000-2.187"></path>
                            </svg>
                        </SvgIcon>
                        Git
                    </IconDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="rgb(121, 82, 179)"
                            >
                                <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"></path>
                            </svg>
                        </SvgIcon>
                        BootStrap
                    </IconDiv>
                </StyleDiv>

                <h3>사용해봤어요</h3>
                <StyleDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.301 0c.88 2.037-3.155 3.294-3.53 4.99-.344 1.56 2.398 3.371 2.4 3.371a12.135 12.135 0 01-1.14-2.18C6.324 4.483 11.333 2.947 9.3 0zm2.68 2.82s-3.54.228-3.72 2.49c-.08 1.009.931 1.539.96 2.271.024.6-.6 1.1-.6 1.1s1.135-.216 1.49-1.13c.394-1.014-.767-1.699-.65-2.51.113-.777 2.52-2.22 2.52-2.22zm-5.56 5.231s-3.24-.046-3.24.87c0 .958 4.241 1.03 7.27.44 0 0 .806-.553 1.02-.76-1.985.405-6.51.45-6.51.1 0-.322 1.46-.65 1.46-.65zm6.23 0a1.95 1.95 0 00-.97.37c.73-.157 1.35.295 1.35.81 0 1.16-1.68 2.25-1.68 2.25s2.601-.294 2.601-2.2c0-.865-.601-1.285-1.3-1.23zm-7.01 1.78c-.498 0-1.24.39-1.24.76 0 .745 3.74 1.317 6.51.23l-.96-.59c-1.878.602-5.336.406-4.31-.4zm.46 1.67c-.682 0-1.13.412-1.13.721 0 .955 4.069 1.051 5.68.08l-1.02-.65c-1.204.509-4.225.586-3.53-.15zm-2.27.861c-1.11-.023-1.831.476-1.831.89 0 2.2 11.362 2.1 11.362-.15 0-.374-.431-.555-.59-.64.929 2.15-9.302 1.98-9.302.71 0-.289.753-.565 1.45-.43l-.59-.34a3.971 3.971 0 00-.5-.04zm10.731 1.48c-1.728 1.638-6.106 2.232-10.512 1.22 4.405 1.803 10.49.792 10.512-1.22z"
                                    fill="#000"
                                ></path>
                            </svg>
                        </SvgIcon>
                        Java
                    </IconDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="rgb(109, 179, 63)"
                            >
                                <path d="M21.854 1.416a10.45 10.45 0 01-1.284 2.247A11.967 11.967 0 103.852 20.776l.444.395a11.954 11.954 0 0019.632-8.297c.346-3.013-.568-6.865-2.074-11.458zM5.58 20.875a1.017 1.017 0 11-.149-1.433 1.04 1.04 0 01.149 1.432zm16.199-3.581c-2.939 3.926-9.26 2.593-13.286 2.79 0 0-.716.05-1.432.148 0 0 .272-.123.618-.247 2.84-.987 4.173-1.185 5.901-2.074 3.235-1.654 6.47-5.284 7.112-9.038-1.235 3.606-4.988 6.717-8.396 7.976-2.346.865-6.568 1.704-6.568 1.704l-.173-.099c-2.865-1.407-2.963-7.63 2.272-9.63 2.296-.89 4.47-.395 6.963-.988 2.643-.617 5.705-2.593 6.94-5.186 1.382 4.174 3.061 10.643.049 14.644z"></path>
                            </svg>
                        </SvgIcon>
                        SpringBoot
                    </IconDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.65 12.122c-.164 0-.276.016-.334.032v1.056c.07.016.154.021.27.021.43 0 .696-.218.696-.583 0-.33-.228-.526-.631-.526z"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M13.605 3.834a.31.31 0 00-.075-.203L10.445.107s-.002 0-.003-.002a.311.311 0 00-.144-.09L10.28.009A.316.316 0 0010.209 0H2.627A.628.628 0 002 .627v14.745c0 .347.282.628.627.628H12.98a.628.628 0 00.628-.627V3.87l-.003-.036zM5.975 13.8c0 1.02-.488 1.375-1.274 1.375a2.11 2.11 0 01-.589-.085l.09-.653c.112.037.255.064.414.064.34 0 .552-.154.552-.711v-2.25h.807v2.26zm1.55 1.37c-.41 0-.813-.107-1.014-.218l.164-.669c.218.112.552.223.897.223.372 0 .568-.154.568-.388 0-.222-.17-.35-.6-.504-.594-.206-.981-.536-.981-1.056 0-.61.51-1.077 1.353-1.077.403 0 .7.085.913.18l-.18.653a1.704 1.704 0 00-.749-.17c-.35 0-.52.16-.52.345 0 .228.202.33.664.504.63.234.929.563.929 1.067 0 .6-.462 1.11-1.445 1.11zm4.23-1.694c-.277.26-.685.377-1.163.377-.106 0-.202-.005-.276-.016v1.28h-.801v-3.53c.249-.043.6-.074 1.093-.074.499 0 .855.095 1.093.286.229.18.383.478.383.828s-.117.648-.33.85zm-9.128-2.821V.628h7.269v3.21c0 .173.14.314.313.314h2.771v6.502H2.628z"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M7.278 5.94s-.422-.813-.407-1.406c.012-.424.968-.843 1.344-1.452.374-.61-.047-1.202-.047-1.202s.093.437-.156.89c-.25.452-1.172.718-1.531 1.499-.358.78.797 1.67.797 1.67z"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M8.856 3.473s-1.437.546-1.437 1.17c0 .625.39.828.453 1.03.062.204-.11.547-.11.547s.563-.39.469-.843c-.094-.453-.531-.593-.281-1.046.167-.303.906-.858.906-.858z"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M7.122 6.765c1.482-.054 1.656-.333 1.81-.467-.858.234-3.137.22-3.154.047-.015-.172.703-.312.703-.312s-1.124 0-1.218.28c-.094.282.532.498 1.859.452zM9.15 6.065s.641 0 .704.39c.062.39-.812.968-.812.968s1.376-.278 1.248-.983c-.156-.86-1.14-.375-1.14-.375zM7.589 7.189c-.65.073-1.436.015-1.5-.095-.06-.109.11-.171.11-.171-.78.188-.354.515.562.578.784.053 1.661-.235 1.661-.235l.27-.218s-.618.086-1.103.14zM6.388 7.73s-.355.01-.375.198c-.021.186.11.28.986.26 1.042-.025 1.216-.149 1.324-.24l.254-.19c-.682.088-.734.112-1.12.123-.39.01-1.07.036-1.1-.036-.032-.074.03-.115.03-.115zM9.792 8.574c.135-.147-.042-.261-.042-.261s.062.073-.02.156c-.084.083-.844.291-2.062.353-1.218.063-2.54-.114-2.582-.27-.04-.156.677-.28.677-.28-.083.01-1.082.03-1.114.302-.03.27.437.488 2.311.488 1.874 0 2.697-.344 2.832-.488z"
                                    fill="#000"
                                ></path>
                                <path
                                    d="M9.063 9.187c-.823.167-3.32.062-3.32.062s1.623.385 3.476.062c.886-.154.937-.583.937-.583s-.27.292-1.093.459z"
                                    fill="#000"
                                ></path>
                            </svg>
                        </SvgIcon>
                        JSP
                    </IconDiv>
                    <IconDiv>
                        <SvgIcon>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="rgb(248, 0, 0)"
                            >
                                <path d="M16.412 4.412h-8.82a7.588 7.588 0 00-.008 15.176h8.828a7.588 7.588 0 000-15.176zm-.193 12.502H7.786a4.915 4.915 0 010-9.828h8.433a4.914 4.914 0 110 9.828z"></path>
                            </svg>
                        </SvgIcon>
                        Oracle
                    </IconDiv>
                </StyleDiv>
                <h2>Tools/Analytics</h2>
                <h3>할 수 있어요</h3>
                <StyleDiv>
                    <IconDiv>PostMan</IconDiv>
                    <IconDiv>Notion</IconDiv>
                    <IconDiv>PhotoShop</IconDiv>
                    <IconDiv>Illustration</IconDiv>
                </StyleDiv>

                <h3>사용해봤어요</h3>
                <StyleDiv>
                    <IconDiv>DbBear</IconDiv>
                    <IconDiv>Vercel</IconDiv>
                </StyleDiv>
            </SkillAb>
            <BottomBorder />
            <h1>CAREER (총 4년 5개월)</h1>
            <h3>(주) 모두모아컴퍼니 19.01.02 ~ 23.05.19 [ 마케팅/대리 ]</h3>
            <h4>
                네이버쇼핑 입퇴점 관리 / 자사몰 유지보수 / 카페24, 고도몰활용
            </h4>
        </div>
    );
}
export default Skills;
