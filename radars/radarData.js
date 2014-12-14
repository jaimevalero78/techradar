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

  { name: 'Develenv',    pc: { r: 180, t: 5 },    movement: 'c',    domain: 'mobile' },
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

            {"name":"OpenId Connect", "pc":{"r":130,"t":260},"movement":"t"},   
            {"name":"Location based services", "pc":{"r":130,"t":230},"movement":"c"},
            {"name":"Openstack", "pc":{"r":190,"t":190},"movement":"c"},
            {"name":"RHEL 7", "pc":{"r":170,"t":215},"movement":"c"},      

            {"name":"App containers", "pc":{"r":250,"t":260},"movement":"c"},
            {"name":"Google Cloud Data Flow", "pc":{"r":275,"t":260},"movement":"t"},
            { name: 'Postgres as NoSQL',              pc: { r: 220, t: 255 },              movement: 'c' },
            {"name":"AWS 2014 Innovations", "pc":{"r":270,"t":195},"movement":"c"},
            {"name":"Azure", "pc":{"r":290,"t":265},"movement":"c"},   
            { name: 'Mesos',              pc: { r: 260, t: 265 },              movement: 't' },
            { name: 'Marathon',              pc: { r: 240, t: 268 },              movement: 't' },
            { name: 'Kubernetes',              pc: { r: 270, t: 236 },              movement: 't' },
            {"name":"Google App Engine", "pc":{"r":290,"t":255},"movement":"c"},   
            {"name":"Google as corporate platform", "pc":{"r":290,"t":200},"movement":"c"},   


            {"name":"Google Play - (alpha/beta builds)", "pc":{"r":30,"t":225},"movement":"c"},
            {"name":"JVM as platform", "pc":{"r":90,"t":265},"movement":"c"},   
            {"name":"AWS", "pc":{"r":90,"t":250},"movement":"c"},   
            { name: 'BigIP v11',              pc: { r: 50, t: 257 },              movement: 'c' },

            {"name":"Tashi", "pc":{"r":90,"t":215},"movement":"c"},
            {"name":"Oracle RAC", "pc":{"r":90,"t":185},"movement":"c"},   
            {"name":"Artifacts", "pc":{"r":70,"t":195},"movement":"c"}

        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'CDI', pc: { r: 60, t: 290 },  movement: 'c' },
            { name: 'Jersey', pc: { r: 60, t: 310 },  movement: 'c' },

            { name: 'Guice', pc: { r: 60, t: 278 },  movement: 'c' },
            { name: 'RxJava', pc: { r: 150, t: 298 },              movement: 'c',  domain: 'template' },          

            {"name":"Java 8", "pc":{"r":130,"t":355},"movement":"c"},   
            {"name":"Groovy ^", "pc":{"r":190,"t":280},"movement":"c"},

            {"name":"Swift", "pc":{"r":280,"t":300},"movement":"c"},
            {"name":"Scala - the good parts ^", "pc":{"r":290,"t":320},"movement":"c"},   
            {"name":"Serverside Javascript", "pc":{"r":220,"t":275},"movement":"c"},   
            {"name":"Coffeescript", "pc":{"r":270,"t":282},"movement":"c"},
            {"name":"Functional Reactive Programming", "pc":{"r":285,"t":330},"movement":"c"},   
            {"name":"Clojure", "pc":{"r":280,"t":310},"movement":"c"},
            { name: 'RxJs',              pc: { r: 250, t: 338 },              movement: 'c',              domain: 'template' },
            { name: 'Web Components', pc: { r: 260, t: 330 },  movement: 'c' },

            { name: 'Mustache/Handlebars template',   pc: { r: 50, t: 298 },              movement: 'c',              domain: 'template' },
            { name: 'Spring ^', pc: { r: 360, t: 330 },  movement: 'c' },
            {"name":"Web Objects", "pc":{"r":390,"t":290},"movement":"c"},
            {"name":"ASP Classic", "pc":{"r":375,"t":330},"movement":"c"},
            {"name":"Java 6 and earlier", "pc":{"r":390,"t":350},"movement":"c"}
        ]
    }
];
