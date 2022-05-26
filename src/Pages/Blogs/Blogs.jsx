import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Blogs = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/Qj8JDbk/page-header-bg.webp')] bg-cover md:h-[40vh] h-[40vh] flex flex-col justify-center items-center ">
        <h3 className="text-white lg:text-5xl text-3xl">FAQ</h3>
      </div>

      <div className="mx-auto lg:w-9/12 w-11/12 container sm:py-20 py-10">
        <Accordion className="rounded duration-500 ">
          <AccordionItem className="box-shadow rounded duration-500">
            <AccordionItemHeading className="border-t  sm:py-6 py-3 sm:px-3 px-0 rounded hover:text-yellow-500 text-black cursor-pointer">
              <AccordionItemButton className="lg:text-xl text-sm font-bold flex items-start duration-300">
                How will you improve the performance of a React Application?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="border-b">
              <p className="sm:px-6 px-3 py-3 border-t sm:text-base text-sm">
                During the initial rendering process, React builds a DOM tree of
                components. So, when data changes in the DOM tree, we want React
                to re-render only those components that were affected by the
                change, skipping the other components in the tree that were not
                affected. However, React could end up re-rendering all
                components in the DOM tree, even though not all are affected.
                This will result in longer loading time, wasted time, and even
                wasted CPU resources. We need to prevent this from happening.
                So, this is where we will focus our optimization effort. In this
                situation, we could configure every component to only render or
                diff when necessary, to avoid wasting resources and time.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-y rounded duration-500">
            <AccordionItemHeading className="border-y-b  py-6 sm:px-3 px-0 rounded hover:text-yellow-500 text-black cursor-pointer">
              <AccordionItemButton className="lg:text-xl text-sm font-bold duration-300 flex items-start">
                What are the different ways to manage a state in a React
                application?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="sm:px-6 px-3 sm:text-base text-sm pt-3 py-3 border-t">
                <strong className="underline mb-3  font-bold text-justify">
                  The Four Kinds of React State to Manage:
                </strong>
                <li>
                  Local (UI) state- Local state is data we manage in one or
                  another component. Local state is most often managed in React
                  using the useState hook.
                </li>
                <li>
                  Global (UI) state- Global state is data we manage across
                  multiple components. Global state is necessary when we want to
                  get and update data anywhere in our app, or in multiple
                  components at least.
                </li>
                <li>
                  Server state- Data that comes from an external server that
                  must be integrated with our UI state. Server state is a simple
                  concept, but can be hard to manage alongside all of our local
                  and global UI state.
                </li>
                <li>
                  URL state- Data that exists on our URLs, including the
                  pathname and query parameters. URL state is often missing as a
                  category of state, but it is an important one. In many cases,
                  a lot of major parts of our application rely upon accessing
                  URL state. Try to imagine building a blog without being able
                  to fetch a post based off of its slug or id that is located in
                  the URL!
                </li>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-b rounded duration-500">
            <AccordionItemHeading className="  py-6 sm:px-3 px-0 rounded hover:text-yellow-500 text-black cursor-pointer">
              <AccordionItemButton className="lg:text-xl text-sm font-bold duration-300 flex items-start">
                How does prototypical inheritance work?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="border-y ">
              <p className="sm:px-6 px-3 py-3 sm:text-base text-sm pt-3 border-t">
                Every object with its methods and properties contains an
                internal and hidden property known as [[Prototype]]. The
                Prototypal Inheritance is a feature in javascript used to add
                methods and properties in objects. It is a method by which an
                object can inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object.getPrototypeOf and Object.setPrototypeOf.
                Nowadays, in modern language, it is being set using __proto__.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-b rounded duration-500">
            <AccordionItemHeading className=" py-6 sm:px-3 px-0 rounded hover:text-yellow-500 text-black cursor-pointer">
              <AccordionItemButton className="lg:text-xl text-sm font-bold duration-300 flex items-start">
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="sm:px-6 px-3 py-3 sm:text-base text-sm pt-3 border-t">
                The useState hook is a special function that takes the initial
                state as an argument and returns an array of two entries.
                Syntax: The first element is the initial state and the second
                one is a function that is used for updating the state. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important. In his book "Working Effectively with Legacy Code",
                author Michael Feathers states that such tests are not unit
                tests when they rely on external systems: “If it talks to the
                database, it talks across the network, it touches the file
                system, it requires system configuration, or it can't be run at
                the same time as any other test."
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-b rounded duration-500">
            <AccordionItemHeading className=" py-6 sm:px-3 px-0 rounded hover:text-yellow-500 text-black cursor-pointer">
              <AccordionItemButton className="lg:text-xl text-sm font-bold duration-300 flex items-start">
                What is a unit test? Why should write unit tests?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-3 border-t">
                <strong className="underline font-bold text-justify">
                  Unit Test:
                </strong>
                A unit test verifies the behavior of a unit of software in the
                system. It verifies whether a small and isolated piece of the
                codebase called “unit” behaves as the developer intended. Unit
                tests verify the smallest parts or components of an application
                by comparing their actual behavior with the expected behavior in
                complete isolation. Here, “complete isolation” means that,
                during unit testing, devs do not connect the application with
                external dependencies such as databases, the filesystem, or HTTP
                services. This allows unit tests to be fast and stable since
                they won't fail due to problems integrating with those external
                services.
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-3 border-t">
                <strong className="underline font-bold text-justify">
                  Reason Write Unit Tests:
                </strong>
                Usually, developers write unit tests first, then write the
                software code. This approach is known as test-driven development
                (TDD). In TDD, the requirements are turned into specific test
                cases, then the software is improved to pass the new tests. In
                the case of unit tests, it allows for the modification of code
                without affecting the functionality of other units or the
                software in its entirety. This makes the job easier for
                developers as the bugs are easy to locate at this stage, which
                saves time and money.
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-3 border-t">
                <strong className="underline text-sm font-bold text-justify">
                  Benefits of Unit Tests:
                </strong>
                <li>
                  Unit tests help to find and fix bugs quickly and easily.
                </li>
                <li>Unit tests contribute to higher code quality.</li>
                <li>
                  Unit tests contribute to better application architecture.
                </li>
                <li>Unit tests act as documentation.</li>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
