(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1084:function(t,e,o){t.exports=o.p+"assets/img/workflow.f56ed2db.png"},1085:function(t,e,o){t.exports=o.p+"assets/img/MicrosoftToDo_node.b7abc54c.png"},1086:function(t,e,o){t.exports=o.p+"assets/img/MicrosoftToDo1_node.6dc473d0.png"},1087:function(t,e,o){t.exports=o.p+"assets/img/MicrosoftToDo2_node.2fe3d891.png"},1936:function(t,e,o){"use strict";o.r(e);var s=o(26),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"microsoft-to-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-to-do"}},[t._v("#")]),t._v(" Microsoft To Do")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://todo.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft To Do"),s("OutboundLink")],1),t._v(" is a cloud-based task management application. It allows users to manage their tasks from a smartphone, tablet, and computer.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),s("p",[t._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Microsoft/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),s("Resource",{attrs:{node:"n8n-nodes-base.microsoftToDo"}}),t._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),s("p",[t._v("This workflow allows you to create, update and get a task in Microsoft To Do. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/1114",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),s("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following nodes.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),s("li",[s("a",{attrs:{href:""}},[t._v("Microsoft To Do")])])]),t._v(" "),s("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1084),alt:"A workflow with the Microsoft To Do node"}})]),t._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),s("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),s("h3",{attrs:{id:"_2-microsoft-to-do-node-create-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-microsoft-to-do-node-create-task"}},[t._v("#")]),t._v(" 2. Microsoft To Do node (create: task)")]),t._v(" "),s("p",[t._v("This node will create a task with the importance level "),s("code",[t._v("High")]),t._v(" in the Tasks list. You can select a different list and the importance level.")]),t._v(" "),s("ol",[s("li",[t._v("First of all, you'll have to enter credentials for the Microsoft To Do node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Microsoft/"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("li",[t._v("Select 'Create' from the "),s("em",[s("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Select a list from the "),s("em",[s("strong",[t._v("List ID")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Enter a subject in the "),s("em",[s("strong",[t._v("Subject")])]),t._v(" field.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Add Field")])]),t._v(" and select 'Importance' from the dropdown list.")]),t._v(" "),s("li",[t._v("Select 'High' from the "),s("em",[s("strong",[t._v("Importance")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),s("p",[t._v("In the screenshot below, you will notice that the node creates a new task in Microsoft To Do.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1085),alt:"Create a task with the Microsoft To Do node"}})]),t._v(" "),s("h3",{attrs:{id:"_3-microsoft-to-do1-node-update-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-microsoft-to-do1-node-update-task"}},[t._v("#")]),t._v(" 3. Microsoft To Do1 node (update: task)")]),t._v(" "),s("p",[t._v("This node will update the status of the task that we created in the previous node.")]),t._v(" "),s("div",{pre:!0},[s("ol",[s("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),s("li",[t._v("Select 'Update' from the "),s("em",[s("strong",[t._v("Operation")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("List ID")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Microsoft To Do > Parameters > taskListId. You can also add the following expression: "),s("code",[t._v('{{$node["Microsoft To Do"].parameter["taskListId"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("Task ID")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Current Node > Input > JSON > id. You can also add the following expression: "),s("code",[t._v('{{$json["id"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on the "),s("em",[s("strong",[t._v("Add Field")])]),t._v(" button and select 'Status' from the dropdown list.")]),t._v(" "),s("li",[t._v("Select 'In progress' from the "),s("em",[s("strong",[t._v("Status")])]),t._v(" dropdown list.")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[t._v("In the screenshot below, you will notice that the node updates the status of the task that we created in the previous node.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1086),alt:"Update the status of a task using the Microsoft To Do node"}})]),t._v(" "),s("h3",{attrs:{id:"_4-microsoft-to-do2-node-get-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-microsoft-to-do2-node-get-task"}},[t._v("#")]),t._v(" 4. Microsoft To Do2 node (get: task)")]),t._v(" "),s("p",[t._v("This node will get the task that we created earlier.")]),t._v(" "),s("div",{pre:!0},[s("ol",[s("li",[t._v("Select the credentials that you entered in the previous node.")]),t._v(" "),s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("List ID")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Nodes > Microsoft To Do > Parameters > taskListId. You can also add the following expression: "),s("code",[t._v('{{$node["Microsoft To Do"].parameter["taskListId"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on the gears icon next to the "),s("em",[s("strong",[t._v("Task ID")])]),t._v(" field and click on "),s("em",[s("strong",[t._v("Add Expression")])]),t._v(".")]),t._v(" "),s("li",[t._v("Select the following in the "),s("em",[s("strong",[t._v("Variable Selector")])]),t._v(" section: Current Node > Input > JSON > id. You can also add the following expression: "),s("code",[t._v('{{$json["id"]}}')]),t._v(".")]),t._v(" "),s("li",[t._v("Click on "),s("em",[s("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])])]),s("p",[t._v("In the screenshot below, you will notice that the node fetches the information of the task that we created earlier.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1087),alt:"Retrieve the information of tasks using the Microsoft To Do node"}})])],1)}),[],!1,null,null,null);e.default=r.exports}}]);