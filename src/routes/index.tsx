import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGuessWord } from "@/lib/useGuessWord";
import { Select } from "@radix-ui/react-select";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { mutateAsync, data } = useGuessWord();
  const [loading,setLoading] = useState<boolean>();
  const [formData, setFormData] = useState({
    Age: "",
    Pre_pregnancy_Weight: "",
    Parity: "",
    Annual_Income: "",
    Socioeconomic_Status: "",
    History_of_Hypertension: "",
    History_of_Diabetes: "",
    History_of_Preeclampsia: "",
    Proteinuria_Levels: "",
    Month: "",
    Systolic_BP: "",
    Diastolic_BP: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = async() => {
    try {
      console.log("Form Data:", formData);
      setLoading(true); // show loading spinner
      const result = await mutateAsync(formData);
      setLoading(false) // call API
      console.log("Prediction Result:", result);  // show response
    } catch (err) {
      console.error("Error while predicting:", err);
    }
   
    
  };
  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
 
  return (
    <>
      <div className="text-white text-xl flex justify-center">
        <div>
          <h1>Hello!!</h1>
          <h1>Check if you have Preclampia</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-lg mx-auto">
        <div className="grid w-[320px] max-w-lg items-center gap-1.5">
          <Label htmlFor="age">Age</Label>
          <Input
            type="number"
            id="Age"
            value={formData.Age}
            onChange={handleChange}
            placeholder="Age"
          />
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label htmlFor="Pre_pregnancy_Weight">Pre Pregnancy Weight(Kg)</Label>
          <Input
            type="text"
            value={formData.Pre_pregnancy_Weight}
            onChange={handleChange}
            id="Pre_pregnancy_Weight"
            placeholder="Pre Pregnancy Weight"
          />
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label htmlFor="parity">Parity</Label>
          <Input
            type="text"
            id="Parity"
            placeholder="Parity"
            value={formData.Parity}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-1.5">
          <Label>Annual Income</Label>
          <Select
            onValueChange={(value) =>
              handleSelectChange("Annual_Income", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Annual Income in Ksh" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="1">0-284,040</SelectItem>
              <SelectItem value="2">284,041-1,439,988</SelectItem>
              <SelectItem value="3">Above 1,439,988</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label>Socio Economic Status</Label>
          <Select
            onValueChange={(value) =>
              handleSelectChange("Socioeconomic_Status", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Economic Status" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="0">Low</SelectItem>
              <SelectItem value="1">Medimum</SelectItem>
              <SelectItem value="2">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label>History of Hypertension</Label>
          <Select
            onValueChange={(value) =>
              handleSelectChange("History_of_Hypertension", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="History of Hypertension" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="1">Yes</SelectItem>
              <SelectItem value="0">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label>History of Diabetes</Label>
          <Select
            onValueChange={(value) =>
              handleSelectChange("History_of_Diabetes", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="History of Diabetes" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="1">Yes</SelectItem>
              <SelectItem value="0">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label>History of Preeclampsia</Label>
          <Select
            onValueChange={(value) =>
              handleSelectChange("History_of_Preeclampsia", value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="History of Preeclampsia" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectItem value="1">Yes</SelectItem>
              <SelectItem value="0">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label htmlFor="parity">Proteinuria Levels</Label>
          <Input
            type="text"
            id="Proteinuria_Levels"
            placeholder="Protuneria Levels"
            value={formData.Proteinuria_Levels}
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label htmlFor="parity">Current Month of Pregnancy</Label>
          <Input
            type="text"
            id="Month"
            placeholder="Current Month of Pregnancy"
            value={formData.Month}
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label htmlFor="parity">Systolic BP</Label>
          <Input
            type="text"
            id="Systolic_BP"
            placeholder="Systolic Bp"
            value={formData.Systolic_BP}
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label htmlFor="parity">Diastolic BP</Label>
          <Input
            type="text"
            id="Diastolic_BP"
            placeholder="Diastolic BP"
            value={formData.Diastolic_BP}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            className="bg-white rounded-2xl text-green-500 h-[70px] w-[140px]"
          >
            Check Preeclampia
          </Button>
        </div>
        {loading ? <h1>Loading...</h1> :(
        <h1 className="text-2xl text-green-600">
        {data.prediction}
        </h1>
        )}
      </div>
    </>
  );
}
