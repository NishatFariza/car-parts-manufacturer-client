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
        <h3 className="text-white text-5xl">FAQ</h3>
      </div>

      <div className="mx-auto sm:w-9/12 w-11/12 container sm:py-20 py-10">
        <Accordion className="rounded duration-500 ">
          <AccordionItem className="box-shadow rounded duration-500">
            <AccordionItemHeading className="border-t  sm:py-6 py-3 sm:px-3 px-0 rounded">
              <AccordionItemButton className="sm:text-2xl text-xl font-bold text-yellow-500 flex items-start">
                What is The Different Between JavaScript And NodeJS?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="border-b">
              <p className="sm:px-6 px-3 pt-3 border-t sm:text-base text-sm">
                <strong className="underline primary-color font-bold text-justify">
                  JavaScript:
                </strong>
                Javascript is a programming language that is used for writing
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-8">
                <strong className="underline primary-color font-bold">
                  NodeJS:
                </strong>
                NodeJS is a Javascript runtime environment. It is mostly used on
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-y rounded duration-500">
            <AccordionItemHeading className="border-y-b  py-6 sm:px-3 px-0 rounded">
              <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-center">
                When Should We Use NodeJS? And When Should We Use MongoDB?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="sm:px-6 px-3 sm:text-base text-sm pt-3 border-t">
                <strong className="underline primary-color font-bold text-justify">
                  Reasons for using NodeJS:
                </strong>
                Nodejs is a Javascript engine that you can write any application
                <p className="mt-3">
                  So, if you want to write some kind of stand-alone program or
                  server in Javascript, then you can use nodejs for it.
                </p>
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-8">
                <strong className="underline primary-color font-bold">
                  Reasons for using node MongoDB:
                </strong>
                (on AWS), Postgres are examples of other databases. <br />
                <strong className="text-stone-600 mt-4">
                  Here are the some main reasons for using MongoDB:
                </strong>
                <li>
                  MongoDB is very flexible and adaptable to real business world
                  situations and requirements.
                </li>
                <li>
                  Queries can be made to return certain fields within documents.
                </li>
                <li>
                  MongoDB supports field, range-based query, regular expression,
                  etc. for searching the data from the stored data.
                </li>
                <li>
                  The dynamic database schema used in MongoDB is called the
                  JSON.
                </li>
                <li>
                  MongoDB basically uses JavaScript objects in place of the
                  procedure.
                </li>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-b rounded duration-500">
            <AccordionItemHeading className="  py-6 sm:px-3 px-0 rounded">
              <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-center">
                What is The Different Between SQL And NoSQL?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="border-y ">
              <p className="sm:px-6 px-3 sm:text-base text-sm pt-3 border-t">
                <strong className="underline primary-color font-bold text-justify">
                  SQL:
                </strong>
                Also a lot of independent consultations are there who can help
                you with SQL database for a very large scale deployments.
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-8">
                <strong className="underline primary-color font-bold">
                  NoSQL:
                </strong>
                for setting up and deploying your large scale NoSQL deployments.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem className="box-shadow border-b rounded duration-500">
            <AccordionItemHeading className=" py-6 sm:px-3 px-0 rounded">
              <AccordionItemButton className="sm:text-2xl text-xl font-bold text-blue-400 flex items-center">
                What is The Purpose of JWT? How dose Work JWT?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="sm:px-6 px-3 sm:text-base text-sm pt-3 border-t">
                <strong className="underline primary-color font-bold text-justify">
                  JWT:
                </strong>
                the signature also certifies that only the party holding the
                private key is the one that signed it.
              </p>
              <p className="sm:px-6 px-3 sm:text-base text-sm py-8">
                <strong className="underline primary-color font-bold">
                  Jwt Work:
                </strong>
                The payload And The signature. The JOSE (JSON Object Signing and
                Encryption) header contains the type of token JWT in this case
                and the signing algorithm.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
