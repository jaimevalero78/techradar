//This is the title for your window tab, and your Radar
document.title = "EPG's Technology Radar (December 2014)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                  // {'r':100,'name':'Adopt'}
                  //,{'r':200,'name':'Trial'}
                  //,{'r':300,'name':'Assess'}
                  //,{'r':400,'name':'Hold'}
                   {'r':100,'name':'Decommisioning'}
                   ,{'r':200,'name':'Use'}
                   ,{'r':300,'name':'Prospect'}
                   ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
//
// - Hold : The Hold Ring is for things that are getting attention in the industry, but we don't think are adequate for us to use. Sometimes this is because we don't think they are mature enough yet, sometimes it means we think they are irredeemably flawed. We don't have an "avoid" ring, but we do throw things in the hold ring that we wouldn't use.
//
// - Prospect : Things that we are evaluating
//
// -Use : blips that we think you should be using now. We don't say that you should use these for every project, any tool should only be used in an appropriate context. However we do think that a blip in the adopt ring represents something where there is no doubt that it's proven and mature for use.
//
// - Decommissioning : Abandon this, obsolescence.
//


//            //            {"name":"Single Page App", "pc":{"r":150,"t":95},"movement":"c", "url":"http://www.google.com"},
var h = 1000;
var w = 1200;

var radar_data = [
      { "quadrant": "Techniques",
	      "left" : 45,
	      "top" : 18,
	      "color" : "#8FA227",
	      "items" : [
              {"name":"Proactive tasks", "pc":{"r":220,"t":140},"movement":"c"},

	      {"name":"EPG's Cost Model", "pc":{"r":120,"t":110},"movement":"c"},
	      {"name":"Initiatives Interview", "pc":{"r":130,"t":150},"movement":"c"},
	      {"name":"Continuous Integration", "pc":{"r":180,"t":100},"movement":"c"},
	      {"name":"SCM", "pc":{"r":180,"t":150},"movement":"c"},
	      {"name":"Automatized Inventory", "pc":{"r":180,"t":130},"movement":"c"},
              {"name":"Automatic monitorization", "pc":{"r":280,"t":170},"movement":"c"},
	      {"name":"Agile", "pc":{"r":160,"t":160},"movement":"c"},

	      {"name":"Manual monitorization", "pc":{"r":80,"t":170},"movement":"c"}
	      ]
      },
{ "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

  { name: 'Develenv',    pc: { r: 180, t: 5 },    movement: 'c',    domain: 'http://wikis.hi.inet/epg-private/index.php/TOOL_CI_develenv' },
  { name: 'Puppet',    pc: { r: 170, t: 29 },    movement: 'c' }, 
   { name: 'Icinga',    pc: { r: 180, t: 82 },    movement: 'c' },
 

  { name: 'Ansible ^',    pc: { r: 280, t: 6 },    movement: 't' },
  { name: 'Check_mk',    pc: { r: 270, t: 16 },    movement: 'c',    domain: 'back-end' },
  { name: 'Graphite',    pc: { r: 280, t: 26 },    movement: 'c' },
  { name: 'LogStash',    pc: { r: 260, t: 36 },    movement: 'c' },
//  { name: 'MongoDB',    pc: { r: 250, t: 36 },    movement: 'c' },
  { name: 'Swift',    pc: { r: 230, t: 46 },    movement: 't' },
  { name: 'VirtualSan',    pc: { r: 280, t: 56 },    movement: 't' },  
  { name: 'Heat',    pc: { r: 280, t: 78 },    movement: 't' },

  { name: 'MaestroDev',    pc: { r: 80, t: 56 },    movement: 'c' },
  { name: 'Robocopy',    pc: { r: 80, t: 76 },    movement: 'c' },
  { name: 'Subversion',    pc: { r: 30, t: 25 },    movement: 'c' }
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            {"name":"Tashi", "pc":{"r":30,"t":260},"movement":"c"},   
            {"name":"Oracle RAC", "pc":{"r":50,"t":230},"movement":"t"},
            {"name":"Artifacts", "pc":{"r":90,"t":190},"movement":"c"},
            {"name":"Blogs", "pc":{"r":70,"t":200},"movement":"c"},     

	    {"name":"Jira", "pc":{"r":170,"t":215},"movement":"c"},      
            {"name":"Pdihub", "pc":{"r":150,"t":240},"movement":"c"},
            {"name":"VMWare", "pc":{"r":175,"t":260},"movement":"c"},
            { name: 'Itop', pc: { r: 120, t: 255 }, movement: 't' },
            {"name":"Vmticket", "pc":{"r":170,"t":195},"movement":"c"},
            {"name":"Itop", "pc":{"r":190,"t":265},"movement":"c"},   
            { name: 'VMWare',  pc: { r: 160, t: 265 }, movement: 'c' },
            { name: 'BaseCamp', pc: { r: 140, t: 268 }, movement: 'c' },
            { name: 'GitHub.com', pc: { r: 170, t: 236 }, movement: 'c' },
            {"name":"Wikis", "pc":{"r":190,"t":255},"movement":"c"},   

	    {"name":"Artifactory", "pc":{"r":110,"t":200},"movement":"c"},   
            {"name":"Repos", "pc":{"r":130,"t":225},"movement":"c"},
            {"name":"MySQL", "pc":{"r":185,"t":245},"movement":"c"},   
            {"name":"SharePoint", "pc":{"r":190,"t":210},"movement":"c"},   
            { name: 'OpenStack', pc: { r: 150, t: 227 }, movement: 'c' },
            {"name":"Inventory Server", "pc":{"r":190,"t":225},"movement":"c"},
            {"name":"Graneros", "pc":{"r":170,"t":250},"movement":"c"},
            { name: 'NetApp', pc: { r: 150, t: 257 }, movement: 'c' },
            {"name":"FTP", "pc":{"r":120,"t":215},"movement":"c"},
            {"name":"Hadoop", "pc":{"r":145,"t":215},"movement":"c"},
	    {"name":"DNS", "pc":{"r":190,"t":185},"movement":"c"}   ,

            { name: 'DCIP', pc: { r: 250, t: 257 }, movement: 'c' },
            {"name":"Satellite", "pc":{"r":220,"t":215},"movement":"t"},
            {"name":"Joget", "pc":{"r":245,"t":215},"movement":"t"}


        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'Perl', pc: { r: 90, t: 330 },  movement: 'c' },
            { name: 'Shell', pc: { r: 140, t: 290 },  movement: 'c' },
            { name: 'Ruby', pc: { r: 120, t: 310 },  movement: 'c' },

            { name: 'Power Shell', pc: { r: 150, t: 305 }, movement: 't',  domain: 'template' },          
            {"name":"ViPerl", "pc":{"r":130,"t":335},"movement":"c"}
        ]
    }
];
