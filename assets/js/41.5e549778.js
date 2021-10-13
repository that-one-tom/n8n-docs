(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1831:function(e,t,o){"use strict";o.r(t);var a=o(26),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"airtable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airtable"}},[e._v("#")]),e._v(" Airtable")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://airtable.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airtable"),a("OutboundLink")],1),e._v(" is a spreadsheet-database hybrid, with the features of a database but applied to a spreadsheet. The fields in an Airtable table are similar to cells in a spreadsheet, but have types such as 'checkbox', 'phone number', and 'drop-down list', and can reference file attachments like images.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("Resource",{attrs:{node:"n8n-nodes-base.airtable"}}),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to insert and update data from a table in Airtable. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/818",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Airtable")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(792),alt:"A workflow with the Airtable node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-set-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),a("p",[e._v("We will use the Set node to set the values for the name and id fields for a new record.")]),e._v(" "),a("ol",[a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("ID")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter an id in the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Name")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter a name in the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node sets the value for "),a("code",[e._v("ID")]),e._v(" and "),a("code",[e._v("Name")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:o(356),alt:"Using the Set node to set data to be inserted by the Airtable node"}})]),e._v(" "),a("h3",{attrs:{id:"_3-airtable-node-append"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-airtable-node-append"}},[e._v("#")]),e._v(" 3. Airtable node (Append)")]),e._v(" "),a("p",[e._v("This node will append the data that we set in the previous node to a table. Create a table like "),a("a",{attrs:{href:"https://airtable.com/shrN2yLZyKEETq1xj",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(" in your Airtable base.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'Append' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the Base ID in the "),a("em",[a("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),a("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),a("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID there.")]),e._v(" "),a("li",[e._v("Enter the name of your table in the "),a("em",[a("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node appends the data that we had set in the previous node.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(793),alt:"Using the Airtable node to insert data into an Airtable table"}})]),e._v(" "),a("h3",{attrs:{id:"_4-airtable1-node-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-airtable1-node-list"}},[e._v("#")]),e._v(" 4. Airtable1 node (List)")]),e._v(" "),a("p",[e._v("This node will list all the records with the name "),a("code",[e._v("n8n")]),e._v(". If you want to list records with a different name, use that name instead.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select the 'List' option from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Base ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Airtable > Parameters > application. You can also add the following expression: "),a("code",[e._v('{{$node["Airtable"].parameter["application"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Table")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Airtable > Parameters > table. You can also add the following expression: "),a("code",[e._v('{{$node["Airtable"].parameter["table"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Option")])]),e._v(" and select 'Filter By Formula' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Name='n8n'")]),e._v(" in the "),a("em",[a("strong",[e._v("Filter By Formula")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node only returns the record with the name "),a("code",[e._v("n8n")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:o(794),alt:"Using the Airtable node to read data from an Airtable table"}})]),e._v(" "),a("h3",{attrs:{id:"_5-set1-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-set1-node"}},[e._v("#")]),e._v(" 5. Set1 node")]),e._v(" "),a("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We will set the value of "),a("code",[e._v("Name")]),e._v(" in this node.")]),e._v(" "),a("ol",[a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("Name")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("nodemation")]),e._v(" in the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Toggle "),a("em",[a("strong",[e._v("Keep Only Set")])]),e._v(" to "),a("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node sets the value of "),a("code",[e._v("Name")]),e._v(". This value is passed to the next node in the workflow.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(356),alt:"Using the Set node to set data to be inserted by the Airtable node"}})]),e._v(" "),a("h3",{attrs:{id:"_6-airtable2-node-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-airtable2-node-update"}},[e._v("#")]),e._v(" 6. Airtable2 node (Update)")]),e._v(" "),a("p",[e._v("This node will update the Name field of the record that we received from the previous Airtable node.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous Airtable node.")]),e._v(" "),a("li",[e._v("Select 'Update' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Base ID")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Airtable > Parameters > application. You can also add the following expression: "),a("code",[e._v('{{$node["Airtable"].parameter["application"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Table")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Airtable > Parameters > table. You can also add the following expression: "),a("code",[e._v('{{$node["Airtable"].parameter["table"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Id")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Airtable1 > Output Data > JSON > id. You can also add the following expression: "),a("code",[e._v('{{$node["Airtable1"].json["id"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node updates the Name field.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(795),alt:"Using the Airtable node to update data of a record"}})]),e._v(" "),a("h2",{attrs:{id:"faqs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),a("h3",{attrs:{id:"how-to-get-the-record-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-the-record-id"}},[e._v("#")]),e._v(" How to get the Record ID?")]),e._v(" "),a("p",[e._v("To fetch data for a particular record, you need the Record ID. There are two ways to get the Record ID.")]),e._v(" "),a("p",[a("strong",[e._v("Create a Record ID column in Airtable")])]),e._v(" "),a("p",[e._v("To create a "),a("code",[e._v("Record ID")]),e._v(" column in your table, refer to this "),a("a",{attrs:{href:"https://support.airtable.com/hc/en-us/articles/360051564873-Record-ID",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v(". You can then use this Record ID in your Airtable node.")]),e._v(" "),a("p",[a("strong",[e._v("Use the List operation")])]),e._v(" "),a("p",[e._v("To get the Record ID of your record, you can use the "),a("em",[a("strong",[e._v("List")])]),e._v(" operation of the Airtable node. This operation will return the Record ID along with the fields. You can then use this Record ID in your Airtable node.")]),e._v(" "),a("h3",{attrs:{id:"how-to-filter-records-when-using-the-list-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-filter-records-when-using-the-list-operation"}},[e._v("#")]),e._v(" How to filter records when using the List operation?")]),e._v(" "),a("p",[e._v("To filter records from your Airtable base, use the "),a("em",[a("strong",[e._v("Filter By Formula")])]),e._v(" option. For example, if you want to return all the users that belong to the organization "),a("code",[e._v("n8n")]),e._v(", follow the steps mentioned below:")]),e._v(" "),a("ol",[a("li",[e._v("Select 'List' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the base ID and the table name in the "),a("em",[a("strong",[e._v("Base ID")])]),e._v(" and "),a("em",[a("strong",[e._v("Table")])]),e._v(" field, respectively.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Option")])]),e._v(" and select 'Filter By Formula' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter the following formula in the "),a("em",[a("strong",[e._v("Filter By Formula")])]),e._v(" field: "),a("code",[e._v("{Organization}='n8n'")]),e._v(".")])]),e._v(" "),a("p",[e._v("Similarly, if you want to return all the users that do not belong to the organization "),a("code",[e._v("n8n")]),e._v(", use the following formula: "),a("code",[e._v("NOT({Organization}='n8n')")]),e._v(".")]),e._v(" "),a("p",[e._v("Refer to the Airtable "),a("a",{attrs:{href:"https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),a("OutboundLink")],1),e._v(" to learn more about the formulas.")]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),a("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=r.exports},356:function(e,t,o){e.exports=o.p+"assets/img/Set_node.68bbea84.png"},792:function(e,t,o){e.exports=o.p+"assets/img/workflow.7c4e7d1c.png"},793:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.261fcd4b.png"},794:function(e,t,o){e.exports=o.p+"assets/img/Airtable1_node.8fa83356.png"},795:function(e,t,o){e.exports=o.p+"assets/img/Airtable2_node.0181be3f.png"}}]);