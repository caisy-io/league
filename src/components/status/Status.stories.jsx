import React from "react";
import { Button, Status } from "../..";

function StatusDemo() {
    const divStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      };
    
      const h1Style = {
        fontSize: 28,
        color: "black",
        fontWeight: 600,
      };
    
      const pStyle = {
        fontSize: 16,
        color: "grey",
        lineHeight: "1.2",
      };
    
      const status1 = (
        <div style={divStyle}>
          <h1 style={h1Style}>&quot;Hmm... that blue button must be important...&quot;</h1>
          <p style={pStyle}>Press it, you paid for it.</p>
          <Button type="primary" onClick={(e) => console.log(e)}>
            Create Document
          </Button>
        </div>
      );
    
      const status2 = (
        <div style={divStyle}>
          <h1 style={h1Style}>Oooops...</h1>
          <p style={pStyle}>No data found.</p>
        </div>
      );
    
      const status3 = (
        <div style={divStyle}>
          <h1 style={h1Style}>500</h1>
          <p style={pStyle}>Sorry, something went wrong.</p>
          <Button onClick={(e) => console.log(e)}>Back Home</Button>
        </div>
      );
    
      const status4 = (
        <div style={divStyle}>
          <h1 style={h1Style}>404</h1>
          <p style={pStyle}>Oh no! Page not found</p>
          <Button onClick={(e) => console.log(e)}>Back Home</Button>
        </div>
      );
    
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f6fa",
            padding: "32px",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <Status emote="🤔">{status1}</Status>
          <Status emote="😶">{status2}</Status>
          <Status emote="😳">{status3}</Status>
          <Status emote="🧐">{status4}</Status>
        </div>
      );
}

export default {
  title: 'Components/Legacy/Status',
  component: StatusDemo,
};
const Template = (args) => <StatusDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
