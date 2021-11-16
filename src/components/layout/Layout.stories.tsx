import React, { useState } from "react";
import { Layout } from "./Layout";
import { initialSize, LayoutSider } from "./LayoutSider";
import { LayoutMainNav } from "./LayoutMainNav";
import { LayoutContent } from "./LayoutContent";
import { LayoutTopNav } from "./LayoutTopNav";
import { SLayoutWrapper } from "./styles/SLayoutWrapper";
import { SLayoutContentWrapper } from "./styles/SLayoutContentWrapper";
import { SLayoutSiderWrapper } from "./styles/SLayoutSiderWrapper";
import useWindowDimensions from "../../utils/hooks/WindowDimensionsHook";
import { SidebarTag } from "../sidebarTag";

function LayoutDemo(args) {
    const [leftSiderOpened, setLeftSiderOpened] = useState(true);
    const [leftSiderSize, setLeftSiderSize] = useState(initialSize);
    const [rightSiderOpened, setRightSiderOpened] = useState(true);
    const [rightSiderSize, setRightSiderSize] = useState(initialSize);

    const { width } = useWindowDimensions(); 
    const mainNavWidth = 100;

    return (
        <Layout 
            style={{
                backgroundColor: "lightgray", 
                color: "white",
                fontSize: "20px",
                lineHeight: 3,
                height: "100vh",
            }} 
            {...args}
        >
            <LayoutMainNav style={{backgroundColor: "#ffae03"}} width={mainNavWidth}>
                <p>nav</p>
            </LayoutMainNav>
            <SLayoutWrapper>
                <LayoutTopNav>
                    Nav bar
                </LayoutTopNav>
                <SLayoutContentWrapper>
                    <SLayoutSiderWrapper left>
                        {leftSiderOpened && 
                            <LayoutSider left onSizeChanged={setLeftSiderSize}>
                                <p>Sider left, resizable side on right side</p>
                            </LayoutSider>
                        }
                        <SidebarTag left onOpenChanged={setLeftSiderOpened}/>
                    </SLayoutSiderWrapper>
                    <LayoutContent style={{background: "darkslateblue"}} width={(width - mainNavWidth - leftSiderSize.width - rightSiderSize.width) + "px"}>
                        <p style={{wordBreak: 'break-word'}}>Content ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent</p>
                        {args.children}
                    </LayoutContent>
                    <SLayoutSiderWrapper left={false}>
                        <SidebarTag left={false} onOpenChanged={setRightSiderOpened}/>
                        {rightSiderOpened && 
                            <LayoutSider left={false} onSizeChanged={setRightSiderSize}>
                                <p>Sider right, resizable side on left side</p>
                            </LayoutSider>
                        }
                    </SLayoutSiderWrapper>
                </SLayoutContentWrapper>
            </SLayoutWrapper>

        </Layout>
    );
}

export default {
  title: 'Components/Layout',
  component: LayoutDemo,
};
const Template = (args) => 
    <LayoutDemo {...args}/>;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
    layout: 'fullscreen',
};


// With LeftSider
export const LeftSider = ({content, ...args}) => {
    const [leftSiderOpened, setLeftSiderOpened] = useState(true);
    const [leftSiderSize, setLeftSiderSize] = useState(initialSize);
    const [rightSiderSize, setRightSiderSize] = useState(initialSize);

    const { width } = useWindowDimensions(); 
    const mainNavWidth = 100;

    return (
        <Layout 
            style={{
                backgroundColor: "lightgray", 
                color: "white",
                fontSize: "20px",
                lineHeight: 3,
                height: "100vh",
            }} 
            {...args}
        >
            <LayoutMainNav style={{backgroundColor: "#ffae03"}} width={mainNavWidth}>
                <p>nav</p>
            </LayoutMainNav>
            <SLayoutWrapper>
                <LayoutTopNav>
                    Nav bar
                </LayoutTopNav>
                <SLayoutContentWrapper>
                    <SLayoutSiderWrapper left>
                        {leftSiderOpened && 
                            <LayoutSider left onSizeChanged={setLeftSiderSize}>
                                <p>Sider left, resizable side on right side</p>
                            </LayoutSider>
                        }
                        <SidebarTag left onOpenChanged={setLeftSiderOpened}/>
                    </SLayoutSiderWrapper>
                    <LayoutContent style={{background: "darkslateblue"}} width={(width - mainNavWidth - leftSiderSize.width - rightSiderSize.width) + "px"}>
                        <p style={{wordBreak: 'break-word'}}>Content ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent</p>
                        {args.children}
                    </LayoutContent>
                </SLayoutContentWrapper>
            </SLayoutWrapper>

        </Layout>
    );
}

LeftSider.args = {};

LeftSider.parameters = {
    layout: 'fullscreen',
};

// With RightSider
export const RightSider = ({content, ...args}) => {
    const [leftSiderSize, setLeftSiderSize] = useState(initialSize);
    const [rightSiderOpened, setRightSiderOpened] = useState(true);
    const [rightSiderSize, setRightSiderSize] = useState(initialSize);

    const { width } = useWindowDimensions(); 
    const mainNavWidth = 100;

    return (
        <Layout 
            style={{
                backgroundColor: "lightgray", 
                color: "white",
                fontSize: "20px",
                lineHeight: 3,
                height: "100vh",
            }} 
            {...args}
        >
            <LayoutMainNav style={{backgroundColor: "#ffae03"}} width={mainNavWidth}>
                <p>nav</p>
            </LayoutMainNav>
            <SLayoutWrapper>
                <LayoutTopNav>
                    Nav bar
                </LayoutTopNav>
                <SLayoutContentWrapper>
                    <LayoutContent style={{background: "darkslateblue"}} width={(width - mainNavWidth - leftSiderSize.width - rightSiderSize.width) + "px"}>
                        <p style={{wordBreak: 'break-word'}}>Content ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent</p>
                        {args.children}
                    </LayoutContent>
                    <SLayoutSiderWrapper left={false}>
                        <SidebarTag left={false} onOpenChanged={setRightSiderOpened}/>
                        {rightSiderOpened && 
                            <LayoutSider left={false} onSizeChanged={setRightSiderSize}>
                                <p>Sider right, resizable side on left side</p>
                            </LayoutSider>
                        }
                    </SLayoutSiderWrapper>
                </SLayoutContentWrapper>
            </SLayoutWrapper>

        </Layout>
    );
}

RightSider.args = {};

RightSider.parameters = {
    layout: 'fullscreen',
};