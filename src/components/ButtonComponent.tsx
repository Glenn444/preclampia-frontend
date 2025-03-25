import { GuessResponse } from "@/routes";
import axios from "axios";




type ButtonProps = {
  inputText: string;
  session_id: string;
  setResponse:React.Dispatch<React.SetStateAction<GuessResponse>>
};
export default function ButtonComponent({
  inputText,
  session_id,
  setResponse
}:ButtonProps) {
  //const guessMutation = useGuessWord();
  const takeGuess = async(guess:string,session_id:string)=>{
    const response = await axios.post(
      "https://wordgameservice-561835270123.europe-west1.run.app/guess",
      { guess, session_id }
    );
    return  response.data;
   
  }
  const handleClick = async(e) => {
    console.log("clicked",session_id);
   const resp = await takeGuess(e.target.innerHTML, session_id);
    setResponse(resp)
    //guessMutation.mutate({ guess: e.target.innerHTML, session_id });
    console.log("done",resp);
    
  };
    //const queryClient = useQueryClient();
  //const cachedData:WordGameQuestion | undefined = queryClient.getQueryData(["game"])
  
  return (
    <div className="flex items-center space-x-4 cursor-pointer" onClick={handleClick}>
      <div className="bg-white h-[4rem] w-[5rem] flex justify-center items-center rounded-2xl">
        <h1 className="text-green-700">{inputText ?? ""}</h1>
      </div>
    </div>
  );
}
