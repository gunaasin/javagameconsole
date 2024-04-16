import React, { useState } from 'react'
import { Maincom } from '../Structrue/Maincom'


export const Component1 = () => {
  const [runCodeData] = useState(null);


  const codesnip = {
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n
  `}
  const answer = {
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`}

  return (
    <>
      
      <Maincom

        game={'https://gunaasin.github.io/firegunfire/'}
        url={'https://videoconsole-lac.vercel.app/?url=https://www.youtube.com/embed/iyLqwyFL0Zc'}
        
       
        steps={[
          'Define a fetchData function that simulates fetching data from a server asynchronously using a Promise. The function returns a Promise that resolves with the fetched data after a simulated delay of 2 seconds.',
          'The startGame function serves as the entry point for the game. It initiates the quest to fetch data from the server using asynchronous code. Inside the function, we use await to wait for the fetchData promise to resolve, and then log the fetched data to the console.',
          'If the data fetch is successful, the player completes the quest and sees a success message. If an error occurs during the fetch operation, an error message is logged to the console.',
          '// Define a function to simulate fetching data from a server',
          'return new Promise((virus) => {}',
          '// Simulate fetching data variable asynchronously',
          '// Simulate a delay of 2 seconds',
          'What is Asynchronous Programming?',

          `      Asynchronous programming is a programming paradigm that allows tasks to be executed independently of the main program flow. In other words, instead of waiting for a task to complete before moving on to the next one, asynchronous programming enables tasks to be executed concurrently, improving efficiency and responsiveness in applications.`
        ]}
        title={"Asynchronous Programming"}
        answer={answer}
        codesnip={codesnip}

      />

    </>
  )
}


export const ChildComponent = ({ runCodeData}) => {
  // const [runCodeData] = useState(null);
  // const updateRunCodeData = (newValue) => {
  //   setRunCodeData(newValue);
  // };
  
  // // Function to simulate an event triggering the update of runCodeData
  // const simulateEvent = () => {
  //   // Example: Simulate an event (e.g., a timer, API response, etc.) that triggers the update of runCodeData
  //   setTimeout(() => {
  //     updateRunCodeData(true); // or false, or null, depending on your logic
  //   }, 2000); // Simulating a 3-second delay before updating runCodeData
  // };

  // // When runCodeData changes, log its value
  // useEffect(() => {
  //   console.log("runCodeData changed:", runCodeData);
  // }, [runCodeData]);

  // // Simulate an event that triggers the update of runCodeData when the component mounts
  // useEffect(() => {
  //   simulateEvent();
  // }, []); // 

  return (
    <div className='testcase' >
      {runCodeData === true && <p className='blutext'>Ready to Run  </p>}
      {runCodeData === false && <p className='redtext '>Test case Failed ! </p>}
      {runCodeData === null && <p className='blutext'>Waiting for code comparison...</p>}
      
    </div>
  )
}


