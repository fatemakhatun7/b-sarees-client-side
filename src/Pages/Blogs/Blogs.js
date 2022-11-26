import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mt-16'>
                <h1 className='text-5xl font-bold flex justify-center text-fuchsia-400'>Blogs</h1>
            </div>
            <div className='m-10'>
                <div className='bg-orange-50 rounded mb-5 p-5'>
                    <h3 className='font-bold'>Q-01:  What are the different ways to manage a state in a React application?</h3>
                    <ul class="list-disc ml-16 mt-3">
                        <li>Local state</li>
                        <li>Global state</li>
                        <li>Server state</li>
                        <li>URL state</li>
                    </ul>
                </div>
                <div className='bg-orange-50 rounded mb-5 p-5'>
                    <h3 className='font-bold'>Q-02: How does prototypical inheritance work?</h3>
                    <p className='mt-3'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
                <div className='bg-orange-50 rounded mb-5 p-5'>
                    <h3 className='font-bold'>Q-03: What is a unit test? Why should we write unit tests?</h3>
                    <p className='mt-3'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p>
                    <p className='mt-3'>They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
                </div>
                <div className='bg-orange-50 rounded mb-5 p-5'>
                    <h3 className='font-bold'>Q-4: What are the differences among React JS, Angular and Vue?</h3>
                    <p className='text-center font-bold text-2xl'>React JS</p>
                    <p className='mt-3'>React.js or React JS or simply React are the different names of this framework. It is a JavaScript library that was released in 2013 and developed by Jordan Walke. It is an open-source, front-end framework used for building UI frameworks.</p>
                    <p className='mt-3'><span className='font-bold'>Latest version:</span> 17.0.2</p>
                    <p className='mt-3'><span className='font-bold'>Features:</span> The react features are as follows:</p>
                    <ul class="list-disc ml-10 mt-3">
                        <li><span className='font-bold'>Declarative:</span> The journey to make React solves painless UI development by being interactive. It can design simple views for each state in the application, and in the backend, react will render and update the data for the right components. The declarative feature makes our code very predictable and is easier to debug.</li>
                        <li><span className='font-bold'>Component-based:</span> React builds the components in an encapsulated manner to manage their state and compose to make complex User interfaces. Since the component logics are written in JS, data can be passed through the app, keeping DOM's state out.</li>
                    </ul>
                    <p className='mt-3'><span className='font-bold'>Characteristics:</span> The characteristics of React JS are:</p>
                    <ul class="list-disc ml-10 mt-3">
                        <li><span className='font-bold'>License:</span> It is licensed under Facebook and documentation licensed under CC by 4.0</li>
                        <li><span className='font-bold'>JSX:</span> It is known as a JavaScript syntax extension, and it is not necessary to use them in react but recommended.</li>
                        <li><span className='font-bold'>Components:</span> React is fully-fledged with components. These smaller components contribute equally to a larger project and hence making debugging very easier and manageable.</li>
                    </ul>
                    <p className='mt-3 font-bold'>Advantages:</p>
                    <ul class="list-disc ml-10 mt-3">
                        <li><span className='font-bold'>Easy to learn and use:</span> Once learned, implement anywhere.</li>
                        <li><span className='font-bold'>Reusable components:</span> It makes the development phase simpler.</li>
                        <li><span className='font-bold'>Virtual DOM:</span> It is a JavaScript object which is efficient and faster than virtual DOM.</li>
                        <li><span className='font-bold'>JSX Fun:</span> JSX means we can add a bit of HTML to our react, making the coding easier and adjusting shortcomings.</li>
                        <li><span className='font-bold'>Community and tools:</span> The React JS is in the current trend, and with the advent of the framework, the community is growing day by day. For any queries, we can get help from a lot of peers.</li>
                    </ul>
                    <p className='text-center font-bold text-2xl'>Angular</p>
                    <p className='mt-3'>Angular is an open-source dynamic web application framework. It came in 2009 by Misko Hevery and Adam Abrons and is currently maintained by Google. It also uses HTML as a template language for extending its context and to create various application components.</p>
                    <p className='mt-3'><span className='font-bold'>Latest version:</span> 11.2.6</p>
                    <p className='mt-3'><span className='font-bold'>Features:</span> The features of angular are as follows:</p>
                    <ul class="list-disc ml-10 mt-3">
                        <li>Create richer web applications.</li>
                        <li>Provides an option to write the client-side application in JavaScript using MVC way.</li>
                        <li>It automatically curbs the JavaScript code for each browser. Therefore, it is cross-compliant.</li>
                        <li>Licensed under Apache 2.0</li>
                        <li>Creates large-scale, high-performance applications that users widely use.</li>
                    </ul>
                    <p className='mt-3'><span className='font-bold'>Characteristics:</span> The characteristics of Angular JS are:</p>
                    <ul class="list-disc ml-10 mt-3">
                        <li><span className='font-bold'>Data-binding:</span> The automatic synchronization between data and the elements is defined as dynamic binding.</li>
                        <li><span className='font-bold'>Scope:</span> The objects that act as a glue between controller and view about the model is regarding model are known as scope.</li>
                        <li><span className='font-bold'>Filters:</span> Filtering here refers to taking a small subset from an array and returning a new array.</li>
                        <li><span className='font-bold'>Directives:</span> They are markers on DOM elements such as elements, attributes, CSS, etc., are known as directives. Directives help create custom HTML tags that serve as new, custom widgets. AngularJS has a wider range of built-in directives such as ngBind, ngModel, etc.</li>
                        <li><span className='font-bold'>Templates:</span> These are the rendered view with information from the controller and model. These can be a single file (such as index.html) or multiple views in one page using partials.</li>
                    </ul>
                    <p className='mt-3 font-bold'>Advantages:</p>
                    <ul class="list-disc ml-10 mt-3">
                        <li>Very helpful in creating single-page websites with proper maintenance and cleanliness.</li>
                        <li>Due to its binding capacity, it gives a very rich and responsive user experience.</li>
                        <li>It is unit-testable and provides reusable components.</li>
                        <li>It can run on any device (laptop, phone, mobile, tablet, etc.) smoothly.</li>
                        <li>The user views an HTML kind of website, but it every controlled by JavaScript.</li>
                        <li>More functionality is achieved with the short code.</li>
                        <li>It uses dependency injection and makes use of separation of concerns.</li>
                    </ul>
                    <p className='text-center font-bold text-2xl'>Vue</p>
                    <p className='mt-3'>Vue JS is a progressive JavaScript framework that uses MVVM (Model view view Model) for Building interfaces and single-page applications. It was created by Evan Vu and released in February 2014. Vue JS is written in JavaScript and typescript.</p>
                    <p className='mt-3'><span className='font-bold'>Latest version:</span> 3.0.7</p>
                    <p className='mt-3'><span className='font-bold'>Features:</span> The Vue JS features are as follows:</p>
                    <ul class="list-disc ml-10 mt-3">
                        <li><span className='font-bold'>Approachable:</span> If you know the basics of HTML, CSS, and JavaScript, we can start building the applications in Vue.</li>
                        <li><span className='font-bold'>Versatile:</span> It has an adoptable incremental system that incrementally scales between a library and a full-featured framework.</li>
                        <li><span className='font-bold'>Performant:</span> It has fast DOM and minimal optimization efforts. The minimum size is 20KB and gzip size.</li>
                    </ul>
                    <p className='mt-3'><span className='font-bold'>Characteristics:</span> The characteristics of Vue JS are:</p>
                    <ul class="list-disc ml-10 mt-3">
                        <li><span className='font-bold'>Virtual DOM:</span> Virtual DOM is also used by angular and react. It is good in terms of optimization, and being inexpensive, the changes are made at a faster rate.</li>
                        <li><span className='font-bold'>Data binding:</span> The directive v-blind available in Vue helps to manipulate or assign values in HTML attributes, change the style and assign classes.</li>
                        <li><span className='font-bold'>Components:</span> The components created in Vue can be reused in HTML.</li>
                        <li><span className='font-bold'>Lightweight and routing:</span> The scripts of Vue are light which makes the performance fast. Vue-router plays a major role in switching between pages.</li>
                        <li><span className='font-bold'>Event handling:</span> The attribute v-on is added to DOM to listen to Vue events.</li>
                    </ul>
                    <p className='mt-3 font-bold'>Advantages:</p>
                    <ul class="list-disc ml-10 mt-3">
                        <li><span className='font-bold'>Simplicity:</span> Because of the single file components, the Vue JS is easy to learn.</li>
                        <li><span className='font-bold'>Integrate:</span> Vue can be integrated with React frameworks; thus, merging any project becomes easier.</li>
                        <li><span className='font-bold'>Customization:</span> It's all functions are readily accessible. Every segment has separate functions, and each function can be named by any name the developer likes. Hence improving the readability.</li>
                        <li><span className='font-bold'>Support and documentation:</span> The support team of Vue JS is amazing as it answers most of the Vue developers' queries. The documentation is such straight and simple even a beginner with basic HTML, CSS, and JavaScript knowledge can begin with.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;