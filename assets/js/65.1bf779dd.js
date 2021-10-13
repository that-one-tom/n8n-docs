(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1345:function(e,t,o){e.exports=o.p+"assets/img/workflow.1f350fb2.png"},1346:function(e,t,o){e.exports=o.p+"assets/img/ReadBinaryFile_node.ad7a6df6.png"},1347:function(e,t,o){e.exports=o.p+"assets/img/YouTube_node.2a1fe191.png"},1348:function(e,t,o){e.exports=o.p+"assets/img/YouTube1_node.91eac0ed.png"},1349:function(e,t,o){e.exports=o.p+"assets/img/YouTube2_node.6aefc71c.png"},2026:function(e,t,o){"use strict";o.r(t);var r=o(26),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"youtube"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#youtube"}},[e._v("#")]),e._v(" YouTube")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("YouTube"),r("OutboundLink")],1),e._v(" is an online video-sharing platform. YouTube allows users to upload, view, rate, share, add to playlists, report, comment on videos, and subscribe to other users.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.youTube"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to upload a video, create a playlist, and add the video to the playlist in YouTube. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/638",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("YouTube")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1345),alt:"A workflow with the Gmail node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-read-binary-file-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-read-binary-file-node"}},[e._v("#")]),e._v(" 2. Read Binary File node")]),e._v(" "),r("ol",[r("li",[e._v("Enter the path to the video file you want to upload in the "),r("em",[r("strong",[e._v("File Path")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(1346),alt:"Using the Read Binary File node to get the video"}})]),e._v(" "),r("div",{pre:!0},[r("h3",{pre:!0,attrs:{id:"_3-youtube-node-upload-video"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-youtube-node-upload-video"}},[e._v("#")]),e._v(" 3. YouTube node (upload: video)")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the YouTube node. You can find out how to do that "),r("RouterLink",{pre:!0,attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Video' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Upload' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the title of the video in the "),r("em",[r("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Select the region code from "),r("em",[r("strong",[e._v("Region Code")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select the video category from the "),r("em",[r("strong",[e._v("Category ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[r("img",{attrs:{src:o(1347),alt:"Using the YouTube node to upload a video"}})]),e._v(" "),r("div",{pre:!0},[r("h3",{pre:!0,attrs:{id:"_4-youtube1-node-create-playlist"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-youtube1-node-create-playlist"}},[e._v("#")]),e._v(" 4. YouTube1 node (create: playlist)")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous YouTube node.")]),e._v(" "),r("li",[e._v("Select 'Playlist' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Create' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the title of the playlist in the "),r("em",[r("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[r("img",{attrs:{src:o(1348),alt:"Using the YouTube node to create a playlist"}})]),e._v(" "),r("div",{pre:!0},[r("h3",{pre:!0,attrs:{id:"_5-youtube2-node-add-playlistitem"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_5-youtube2-node-add-playlistitem"}},[e._v("#")]),e._v(" 5. YouTube2 node (add: playlistItem)")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous YouTube node.")]),e._v(" "),r("li",[e._v("Select 'Playlist Item' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select the playlist from the "),r("em",[r("strong",[e._v("Playlist ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Video ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > YouTube > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["YouTube"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[r("img",{attrs:{src:o(1349),alt:"Using the YouTube node to add the video to the playlist"}})]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=a.exports}}]);