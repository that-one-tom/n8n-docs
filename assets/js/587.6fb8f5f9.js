(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1763:function(e,t,n){"use strict";n.r(t);var i=n(26),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"zendesk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zendesk"}},[e._v("#")]),e._v(" Zendesk")]),e._v(" "),n("p",[e._v("You can use these credentials to authenticate the following nodes with Zendesk.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Zendesk/"}},[e._v("Zendesk")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/ZendeskTrigger/"}},[e._v("Zendesk Trigger")])],1)]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Create a "),n("a",{attrs:{href:"https://zendesk.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zendesk"),n("OutboundLink")],1),e._v(" account.")]),e._v(" "),n("h2",{attrs:{id:"using-oauth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),n("ol",[n("li",[e._v("Open your Zendesk dashboard.")]),e._v(" "),n("li",[e._v("Click on the gear icon on the left.")]),e._v(" "),n("li",[e._v("Click on 'API' under the "),n("em",[n("strong",[e._v("CHANNELS")])]),e._v(" section in the sidebar.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("OAuth Clients")])]),e._v(" tab.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add OAuth client")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter the client name in the "),n("em",[n("strong",[e._v("Client Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter a description in the "),n("em",[n("strong",[e._v("Description")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Copy the 'OAuth Callback URL' provided in the 'Zendesk OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Paste it in the "),n("em",[n("strong",[e._v("Redirect URLs")])]),e._v(" field on the Zendesk API credentials page.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Save")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("OK")])]),e._v(" button on the "),n("em",[n("strong",[e._v("Please store the secret that will appear")])]),e._v(" pop-up.")]),e._v(" "),n("li",[e._v("Scroll down to the "),n("em",[n("strong",[e._v("Secret")])]),e._v(" section and copy the displayed "),n("em",[n("strong",[e._v("Secret")])]),e._v(".")]),e._v(" "),n("li",[e._v("Paste this secret in the "),n("em",[n("strong",[e._v("Client Secret")])]),e._v(" field in the 'Zendesk OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Copy the "),n("em",[n("strong",[e._v("Unique identifier")])]),e._v(" from the Zendesk API credentials page.")]),e._v(" "),n("li",[e._v("Paste it in the "),n("em",[n("strong",[e._v("Client ID")])]),e._v(" field in the 'Zendesk OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Enter your Zendesk subdomain in the "),n("em",[n("strong",[e._v("Subdomain")])]),e._v(" field in the 'Zendesk OAuth2 API' credentials in n8n. Refer to the "),n("a",{attrs:{href:"#how-do-i-get-my-zendesk-subdomain"}},[e._v("FAQs")]),e._v(" to learn more about subdomain.")]),e._v(" "),n("li",[e._v("Enter the name for your credentials in the "),n("em",[n("strong",[e._v("Credentials Name")])]),e._v(" field in the 'Zendesk OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Click on the circle button in the OAuth section to connect a Zendesk account to n8n.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Save")])]),e._v(" button to save your credentials.")])]),e._v(" "),n("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/ieNHkgUVNhM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("h2",{attrs:{id:"using-access-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-access-token"}},[e._v("#")]),e._v(" Using Access Token")]),e._v(" "),n("ol",[n("li",[e._v("Open your Zendesk dashboard.")]),e._v(" "),n("li",[e._v("Click on the gear icon on the left.")]),e._v(" "),n("li",[e._v("Click on 'API' under the "),n("em",[n("strong",[e._v("CHANNELS")])]),e._v(" section in the sidebar.")]),e._v(" "),n("li",[e._v("If "),n("em",[n("strong",[e._v("Token access")])]),e._v(" is disabled, click on the switch to toggle it to 'Enabled'.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add API token")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter a description in the "),n("em",[n("strong",[e._v("API token description")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Copy")])]),e._v(" button to copy the API token.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Save")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Enter the name for your credentials in the "),n("em",[n("strong",[e._v("Credentials Name")])]),e._v(" field in the 'Zendesk API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Enter your Zendesk subdomain in the "),n("em",[n("strong",[e._v("Subdomain")])]),e._v(" field. Refer to the "),n("a",{attrs:{href:"#how-do-i-get-my-zendesk-subdomain"}},[e._v("FAQs")]),e._v(" to learn more about subdomain.")]),e._v(" "),n("li",[e._v("Enter your Zendesk email address in the "),n("em",[n("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Paste the "),n("em",[n("strong",[e._v("API token")])]),e._v(" in the "),n("em",[n("strong",[e._v("API Token")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Save")])]),e._v(" button to save your credentials.")])]),e._v(" "),n("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/AvduoHrFJdQ",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"how-do-i-get-my-zendesk-subdomain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-get-my-zendesk-subdomain"}},[e._v("#")]),e._v(" How do I get my Zendesk subdomain?")]),e._v(" "),n("p",[e._v("To get your Zendesk subdomain, follow the steps mentioned below.")]),e._v(" "),n("ol",[n("li",[e._v("Access your Zendesk dashboard.")]),e._v(" "),n("li",[e._v("Copy the string of characters located between "),n("code",[e._v("https://")]),e._v(" and "),n("code",[e._v(".zendesk.com/agent/dashboard")]),e._v(" in your Zendesk URL. This string is the subdomain. For example, if your Zendesk URL is "),n("code",[e._v("https://example.zendesk.com/agent/dashboard")]),e._v(", the subdomain will be "),n("code",[e._v("example")]),e._v(".")])])])}),[],!1,null,null,null);t.default=o.exports}}]);