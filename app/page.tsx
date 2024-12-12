"use client"
import Image from "next/image"
import GPTLogo from "./assets/GPTLogo.svg"
import { useChat } from "ai/react"
import { Message } from "ai"
import Bubble from "./components/Bubble";
import LoadingBubble from "./components/LoadingBubble";
import PromptSuggestionRow from "./components/PromptSuggestionsRow";

const Home = () => {
    const {
        append,
        isLoading,
        messages,
        input,
        handleInputChange,
        handleSubmit,
    } = useChat();

    const noMessages = !messages || messages.length === 0;
    const handlePrompt = (promptText) => {
        const msg: Message = {
            id: crypto.randomUUID(),
            content: promptText,
            role: "user",
        };
        append(msg);
    };
    return (
        <main>
            <Image src={GPTLogo} width="250" alt="THWS Student" />
            <section className={noMessages ? "" : "populated"}>
                {noMessages ? (
                    <>
                        <p className="starter-text">
                            Welcome to THWS GPT! Ask me anything about THWS University and I will do my
                            best to help you.
                        </p>
                        <br />
                        <PromptSuggestionRow onPromptClick={handlePrompt} />
                    </>
                ) : (
                    <>
                        {messages.map((message, index) => (
                            <Bubble key={`message-${index}`} message={message} />
                        ))}
                        {isLoading && <LoadingBubble />}
                    </>
                )}
            </section>
            <form onSubmit={handleSubmit}>
                <input
                    className="question=box"
                    onChange={handleInputChange}
                    value={input}
                    placeholder="How can I help you? :)"
                />
                <input type="submit" />
            </form>
        </main>
    );
};

export default Home;


//const Home = () => {

  //  const noMessages = true

    //return (
      //  <main>
        //    <Image src={f1GPTLogo} width="250" alt="F1GPT Logo"/>
          //  <section className={noMessages ? "" : "populated"}>
            //    {noMessages ? (
              //      <>
                //        <p className="starter-text">
                  //          Welcome to F1 GPT! Ask me anything about Formula 1 and I'll do my
                    //        best to help you.
                      //  </p>
                        //<br/>
                //        <PromptSuggestionRow onPromptClick={handlePrompt}/>
                  //  </>
               // ) : (
                   // <>
                 //       {messages.map((message, index) => (
               //             <Bubble key={`message-${index}`} message={message}/>
             //           ))}
           //             {isLoading && <LoadingBubble/>}
         //           </>
       //         )}
     //       </section>
   //     </main>
 //   )
//}

//export default Home
