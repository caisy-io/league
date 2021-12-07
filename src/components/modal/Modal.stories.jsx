import React from "react";
import styled from "styled-components";
import {
  Modal,
  ModalFooter,
  ModalHeader,
  ModalHeaderTitle,
  ModalContent,
  Button,
  IconClose,
  IconInfo,
  Img,
  SModalHeaderCloseIcon,
} from "../..";

function ModalDemo() {
    const showcaseStyles = {
        margin: 32,
        display: "flex",
        gap: 20,
      };
    
      const containerStyles = {
        padding: 32,
        display: "flex",
        alignItems: "flex-start",
        maxWidth: 350,
      };
    
      const contentContainer = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 8,
      };
    
      const iconContainerStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 20,
        width: 20,
        padding: 8,
        marginRight: 16,
        borderRadius: 6,
        backgroundColor: "lightblue",
      };
    
      const h1Styles = {
        fontWeight: 600,
      };
    
      const pStyles = {
        lineHeight: 1.6,
      };
    
      const selectStyles = {
        borderRadius: 6,
        color: "var(--neutral-600)",
        width: "100%",
        padding: 8,
      };
    
      const LightBoxClose = styled.div`
        position: absolute;
        top: 32px;
        right: 32px;
        z-index: 10;
      `;
    
      const LightContainer = styled.div`
        position: relative;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: -2px;
      `;
    
      const [modal1Opened, setModal1Opened] = React.useState(false);
      const [modal2Opened, setModal2Opened] = React.useState(false);
      const [modal3Opened, setModal3Opened] = React.useState(false);
    
      return (
        <div style={showcaseStyles}>
          <Button onClick={() => setModal1Opened(true)}>Open Modal 1 (small)</Button>
          <Button onClick={() => setModal2Opened(true)}>Open Modal 2 (complex)</Button>
          <Button onClick={() => setModal3Opened(true)}>Open Modal 3 (lightbox) </Button>
    
          <Modal onClose={() => setModal1Opened(false)} visible={modal1Opened}>
            <div style={containerStyles}>
              <div style={iconContainerStyles}>
                <IconInfo />
              </div>
              <div style={contentContainer}>
                <h1 style={h1Styles}>Modal title</h1>
                <p style={pStyles}>Interactively monetize corportate alignments and fully tested niche markets.</p>
              </div>
            </div>
          </Modal>
    
          <Modal onClose={() => setModal3Opened(false)} visible={modal3Opened}>
            <LightContainer>
              <LightBoxClose>
                <SModalHeaderCloseIcon onClick={() => setModal3Opened(false)}>
                  <IconClose />
                </SModalHeaderCloseIcon>
              </LightBoxClose>
              <Img
                resolution={1920}
                src={
                  "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                }
              />
            </LightContainer>
          </Modal>
    
          <Modal onClose={() => setModal2Opened(false)} visible={modal2Opened}>
            <ModalHeader onClose={() => setModal2Opened(false)}>
              <ModalHeaderTitle>Modal title</ModalHeaderTitle>
            </ModalHeader>
            <ModalContent>Interactively monetize corporate alignments and fully tested niche markets.</ModalContent>
            <ModalContent>
              <label>Default</label>
              <select style={selectStyles} defaultValue="Single Select">
                <option value="single-select">Single Select</option>
              </select>
            </ModalContent>
            <ModalFooter>
              <Button onClick={() => setModal2Opened(false)} type="neutral">
                Cancel
              </Button>
              <div style={{ margin: 8 }}></div>
              <Button>Ok</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
}

export default {
  title: 'Components/Menus & Popovers/Modal',
  component: ModalDemo,
};
const Template = (args) => <ModalDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};

