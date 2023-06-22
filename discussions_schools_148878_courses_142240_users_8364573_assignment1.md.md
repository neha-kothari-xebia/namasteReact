Q1 -> What is Emmet?
Ans -> Emmet is a piece of software or pluggin in the integrated development environment. Emmet makes our development process easy through providing the dummy code on typing shortcuts.
e.g. By typing main in eclipse the skeleton of main method will be created on hitting ctrl + space

Q2 -> Difference between Library and Framework
Library are ready to use piece of code which we can involve in our project any where i.e. we decide when and where the code from the library will be used in our project
e.g. Apache POI is a library for creating the excel, word, etc documents, we can controll over the flow
In other hand Framework are build on the top of APIs to make the developmen easy by providing boiler plate logics 
e.g. Spring is a framework which provide the way of creating the web application in which it provide certain way to create the controller and other components by implementing the servlet api

Q3 -> What is CDN and Why do we use it?
CDN stands for Content Delivery Network, It's a group of servers located at different geographical location connected over the network which provides the required contents to the end user through it's nearest/closest server. By distributing content closer to website visitors by using a nearby CDN server (among other optimizations), visitors experience faster page loading times.
We use CDN because of many Reasons
    1. Improving website load times 
         By distributing content closer to website visitors by using a nearby CDN server (among other optimizations), visitors experience faster page loading times.
    2. Reducing bandwidth costs
        Through caching and other optimizations, CDNs are able to reduce the amount of data an origin server must provide
    3. Increasing content availability and redundancy
        Because Of distributed nature CDN can handle more traffic and withstand hardware failure better than many origin servers.
    4. Improving website security
        A CDN may improve security by providing DDoS mitigation, improvements to security certificates, and other optimizations.
DDoS mitigation is the process of successfully protecting the target server or network from distributed denial-of-service attack.It involves 4 stage of mitigating DDoS attack
1. Detection
2. Response
3. Routing
4. Adaptation

Q4 -> Why React is known as react?
React is a java script library which is build on the concept of reactive programming,  It emphasizes the concept of reacting to changes in data, Os in React UI components react to changes in application state and automatically update themselves.

Q5 -> What is crossorigin attribute and use of it?
This attribute is valide with different html tags like <audio>, <img>, <link>, <script> and <video>
While using React CDN link we can see the crossorigin, the use of this attribute is to support the cross origine resource sharing, this attribute defines how the cross request are being handeled by these html elements

Q6 -> Difference between React and ReactDOM
React is a javascript library for building user interface
ReactDom is a javascript library that allows React to interact with dom.

Q7 -> Difference between react.development.js and react.production.js
react.development.js is having all the functionality similer to the production one but the difference is in production the code is more Minified and optimized to work on the client system

Q8 -> async and defer both are attributes used in script tag
while loading(Parsing) HTML browsre generally pause the loading when it come across a normal script tag like <script> some javascript functions written in side it </script> and it start executing the script right away. The same happens for external scripts which we load through src attribute through <script src="url or location of the script"></script>, here browser first download and then execute the script and after that it start loading rest of the HTML page.
DEFER:
When we use defer attribut for external script file, in this situation browser doesn't wait for script to be downloaded and executed rather it continues parsing the html and once HTML loading completes the downloaded script will be executed in the end
ASYNC:
This is also makes script non blocking but, in this situation as soon as external script gets downloaded the script will be executed. So when we use async attribute then browser will continue the loading till the external script file is being downloaded and once the file gets downloaded the HTML parsing will be paused to execute the externally downloaded script file and aftre execuing the script the rendering starts againg from where it left.