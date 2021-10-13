(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1859:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"demio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#demio"}},[e._v("#")]),e._v(" Demio")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://demio.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demio"),r("OutboundLink")],1),e._v(" provides a simple, no-download webinar experience and all the marketing tools you need to generate better results.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Demio/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.demio"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to register your audience to an event on Demio via a Typeform submission. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/947",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/TypeformTrigger/"}},[e._v("Typeform Trigger")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Demio")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(870),alt:"A workflow with the Demio node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-typeform-trigger-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-typeform-trigger-node"}},[e._v("#")]),e._v(" 1. Typeform Trigger node")]),e._v(" "),r("p",[e._v("This node will trigger the workflow when a form response is submitted.")]),e._v(" "),r("p",[e._v("This example workflow uses a Typeform to collect name and email address. Create a form exactly like "),r("a",{attrs:{href:"https://n8ndocsburner.typeform.com/to/dpr2kxSL",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),r("OutboundLink")],1),e._v(" for the example workflow. Below are the questions and their question types for the form.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Question")]),e._v(" "),r("th",[e._v("Type")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Let's start with your name.")]),e._v(" "),r("td",[e._v("Short Text")])]),e._v(" "),r("tr",[r("td",[e._v("What's your email address?")]),e._v(" "),r("td",[e._v("Email")])])])]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Typeform Trigger node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Typeform/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select your form from the "),r("em",[r("strong",[e._v("Form")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the Typeform Trigger node triggers the workflow and returns the response submitted by a user.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(871),alt:"Using the Typeform Trigger node to trigger the workflow"}})]),e._v(" "),r("h3",{attrs:{id:"_2-demio-node-register-event"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-demio-node-register-event"}},[e._v("#")]),e._v(" 2. Demio node (register: event)")]),e._v(" "),r("p",[e._v("This node will use the information from the previous node to register the user for an event on Demio. If you don't have an event on Demio, make sure to create one.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Demio node. You can find out how to enter credentials for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Demio/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Register' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select the event from the "),r("em",[r("strong",[e._v("Event ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("First Name")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),r("div",{pre:!0},[r("ol",{pre:!0,attrs:{start:"5"}},[r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > Let's start with your name. You can also add the following expression: "),r("code",[e._v('{{$json["Let\'s start with your name."]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Email")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > What's your email address? You can also add the following expression: "),r("code",[e._v('{{$json["What\'s your email address?"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node registers the user for an event on Demio.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(872),alt:"Using the Demio node to register a user for an event"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),r("p",[e._v("This example workflow uses the Typeform Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered when a new form is submitted.")])])],1)}),[],!1,null,null,null);t.default=n.exports},870:function(e,t,o){e.exports=o.p+"assets/img/workflow.d90834da.png"},871:function(e,t,o){e.exports=o.p+"assets/img/TypeformTrigger_node.dd4eaf3c.png"},872:function(e,t,o){e.exports=o.p+"assets/img/Demio_node.5f6ceb25.png"}}]);